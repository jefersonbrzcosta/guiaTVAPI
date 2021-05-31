export const titleFormat = (title: string) => {
  return title.split(' |')[0].split('Programação ')[1]
}

export const renderDate = (date: string, time: string) => {
  time = time.replace('∶', ':')
  const year = new Date().getFullYear()
  const month = date.slice(-2)
  const day = date.slice(-5, -3)
  return new Date(`${year}-${month}-${day}T${time}:00-00:00`)
}
