import ICrud from '../base/interfaceICrud'
import Mongoose, { Schema } from 'mongoose'
const DB_STATUS = {
  0: 'disconnected',
  1: 'connecting',
  2: 'connected',
  3: 'disconnected',
}

export default class MongoDB extends ICrud {
  _collection: any
  _connection: any
  constructor(connection, schema) {
    super()
    this._collection = schema
    this._connection = connection
  }
  async isConnect() {
    const state = DB_STATUS[this._connection.readyState]
    console.log(state)
    if (state === 'connected') return state
    if (state !== 'connecting') return state
    if (state === 'connecting') {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      return DB_STATUS[this._connection.readyState]
    }
  }
  static connect() {
    Mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.lnvro.mongodb.net/guiaAPI`,
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
      (error) => {
        if (!error) return
        console.log('DB Error', error)
      }
    )

    const connection = Mongoose.connection
    connection.once('open', () => console.log('Connected to DB'))
    return connection
  }
  async create(data) {
    return this._collection.create(data)
  }
  async read(item = {}) {
    // return this._collection.find(item, { name: 1, poder: 1, insertedAt: 1 })
  }
  async update(id, item) {
    // return this._collection.updateOne({ _id: id }, { $set: item })
  }

  async delete(id) {
    // return this._collection.deleteOne({ _id: id })
  }
}
