import ICrud from './interfaceICrud'

export default class ContextStrategy extends ICrud {
  _database: any
  constructor(strategy) {
    super()
    this._database = strategy
  }

  create(item) {
    return this._database.create(item)
  }

  isConnect() {
    return this._database.isConnect()
  }

  connect() {
    return this._database.connect()
  }

  read(query) {
    return this._database.read(query)
  }

  update(id, item) {
    return this._database.update(id, item)
  }

  delete(id) {
    return this._database.delete(id)
  }
}
