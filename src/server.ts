require('dotenv').config()
import express from 'express'
import dataScraping from './services/dataScraping'
const app = express()

import MongoDB from './database/strategies/mongodb/mongodb'
import ContextStrategy from './database/strategies/base/contextStrategy'
import channelsSchema from './database/strategies/mongodb/schemas/channelsSchema'

const connection = MongoDB.connect()
const database = new ContextStrategy(new MongoDB(connection, channelsSchema))

app.get('/', async (_, response) => {
  return response.json({
    instructions:
      'Welcome to the channel guide API for brazil. Please visit the website https://meuguia.tv/ to check the channel url you should use. Just enter the end url from channel to get API response.',
  })
})

app.get('/:channel', async (request, response) => {
  const information = await dataScraping(request.params.channel)
  if (!information) return response.json({ error: 'Not Found' })
  return response.json(information)
})

let port = process.env.PORT || 3333

app.listen(port, () =>
  console.log(`Server running on port http://localhost:${port}`)
)
