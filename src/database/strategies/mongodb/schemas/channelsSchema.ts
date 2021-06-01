import Mongoose, { Schema } from 'mongoose'

const channelSchema: Schema = new Schema(
  {
    date: {
      type: String,
      required: true,
    },
    formattedDate: {
      type: Date,
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

const schema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true, unique: true },
  guide: { type: [channelSchema], required: true },
  updatedAt: { type: Date, default: new Date() },
})

const channelsSchema =
  Mongoose.models.channels || Mongoose.model('channels', schema)

export default channelsSchema
