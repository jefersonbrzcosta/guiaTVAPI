require('dotenv').config()
import assert from 'assert'
import MongoDB from '../database/strategies/mongodb'
import ContextStrategy from '../database/strategies/base/contextStrategy'

const context = new ContextStrategy(new MongoDB())

describe('MongoDB Test Suite', function () {
  this.beforeAll(async () => {
    await context.connect()
  }),
    it('should connect to the database', async () => {
      const result = await context.isConnect()
      const expected = 'connected'
      assert.deepStrictEqual(result, expected)
    })
})
