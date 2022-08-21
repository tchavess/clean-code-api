import { Collection } from "mongodb"
import env from "../../../../main/config/env"
import { MongoHelper } from "../helpers/mongo-helpers"
import { LogMongoRepository } from './log'

describe('Log Mongo Repository', () => {
  let errorsCollection: Collection
  beforeAll(async () => {
    await MongoHelper.connect(env.mongoUrl)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    errorsCollection = await MongoHelper.getCollection('errors')
    await errorsCollection.deleteMany({})
  })
  test('Should create an log error on success', async () => {
    const sut = new LogMongoRepository()
    await sut.logError('any_error')
    const count = await errorsCollection.countDocuments()
    expect(count).toBe(1)
  })
})
