import ContextStrategy from './strategies/base/contextStrategy'
import MongoDB from './strategies/mongodb'

const contextMongo = new ContextStrategy(new MongoDB())
contextMongo.create('nada')
