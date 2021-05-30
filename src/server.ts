require('dotenv').config()
import express from 'express'
import getChannel from './repositories/channels'
const app = express()

app.get('/', async (_, response) => {
  return response.json({
    instructions:
      'Welcome to the channel guide API for brazil. Please visit the website https://meuguia.tv/ to check the channel url you should use. Just enter the end url from channel to get API response.',
  })
})

app.get('/:channel', async (request, response) => {
  const information = await getChannel(request.params.channel)
  if (!information) return response.json({ error: 'Not Found' })
  return response.json(information)
})

let port = process.env.PORT || 3333

app.listen(port, () =>
  console.log(`Server running on port http://localhost:${port}`)
)
