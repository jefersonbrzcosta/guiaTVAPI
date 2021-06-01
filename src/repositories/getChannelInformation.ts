import dataScraping from '../services/dataScraping'

const getChannelInformation = async (channel: string, database: any) => {
  const information = await dataScraping(channel)
  if (!information) return false
  const results = await database.create(information)
  return results
}

export default getChannelInformation
