import ICrud from './interfaces/interfaceICrud'
import Mongoose, { Schema } from 'mongoose'
const DB_STATUS = {
  0: 'disconnected',
  1: 'connecting',
  2: 'connected',
  3: 'disconnected',
}

export default class MongoDB extends ICrud {
  _channelsSchema: any
  _driver: any
  constructor() {
    super()
    this._channelsSchema = null
    this._driver = null
  }
  defineModel() {
    const channelSchema: Schema = new Schema(
      {
        date: {
          type: String,
          required: true,
        },
        formattedDate: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        category: {
          type: String,
          required: true,
        },
      },
      { _id: false }
    )

    const channelsSchema = new Schema({
      name: { type: String, required: true, unique: true },
      guide: { type: [channelSchema], required: true },
      updatedAt: { type: Date, default: new Date() },
    })

    this._channelsSchema = Mongoose.model('channels', channelsSchema)
  }
  async isConnect() {
    const state = DB_STATUS[this._driver.readyState]
    console.log(state)
    if (state === 'connected') return state
    if (state !== 'connecting') return state
    if (state === 'connecting') {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      console.log(DB_STATUS[this._driver.readyState])
      return DB_STATUS[this._driver.readyState]
    }
  }
  connect() {
    Mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.lnvro.mongodb.net/guiaAPI`,
      { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
      (error) => {
        if (!error) return
        console.log('DB Error', error)
      }
    )

    this._driver = Mongoose.connection
    this._driver.once('open', () => console.log('Connected to DB'))
    this.defineModel()
  }
  async create(item) {
    const newChannelEntry = await this._channelsSchema.create(item)
    console.log('newChannelEntry', newChannelEntry)
  }
}
