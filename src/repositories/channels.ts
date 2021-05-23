import jsdom from 'jsdom'
import got from 'got'

import { titleFormat } from '../utils'

interface results {
  date: string
  time: string
  name: string
  category: string
}

const getChannel = async (channel: string) => {
  const { JSDOM } = jsdom
  let currentDay: string
  let itemCount = 0
  const list: results[] = []
  const url = `https://meuguia.tv/programacao/canal/${channel}`
  try {
    const page = await got(url)
    const content = new JSDOM(page.body)
    const channelName =
      titleFormat(content.window.document.title) || 'not found'
    if (channelName !== 'not found') {
      const time = [...content.window.document.querySelectorAll('.lileft')]
      const allItems = [...content.window.document.querySelectorAll('.mw > li')]
      const category = [
        ...content.window.document.querySelectorAll('.licontent > h3'),
      ]
      allItems.forEach((element) => {
        if (element.classList.value === 'divider') return
        if (element.classList.value === 'subheader devicepadding') {
          currentDay = element.innerHTML
          return
        }
        list.push({
          date: currentDay,
          time: time[itemCount].innerHTML,
          name: element.children[0].title,
          category: category[itemCount].innerHTML,
        })
        itemCount++
      })
    }

    return { [channelName]: list }
  } catch (error) {
    console.error(error)
  }
}

export default getChannel
