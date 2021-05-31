import dataScraping from '../services/dataScraping'
import MongoDB from '../database/strategies/mongodb/mongodb'
import ContextStrategy from '../database/strategies/base/contextStrategy'

const getChannelInformation = async (channel: string) => {
  const information = await dataScraping(channel)
}

export default getChannelInformation
