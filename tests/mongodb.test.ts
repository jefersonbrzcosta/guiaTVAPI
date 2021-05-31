require('dotenv').config()
import assert from 'assert'
import MongoDB from '../src/database/strategies/mongodb/mongodb'
import ContextStrategy from '../src/database/strategies/base/contextStrategy'
import channelsSchema from '../src/database/strategies/mongodb/schemas/channelsSchema'

let context: any = {}

describe('MongoDB Test Suite', function () {
  this.beforeAll(async () => {
    const connection = MongoDB.connect()
    context = new ContextStrategy(new MongoDB(connection, channelsSchema))
  }),
    it('should connect to the database', async () => {
      const result = await context.isConnect()
      const expected = 'connected'
      assert.deepStrictEqual(result, expected)
    })
})
