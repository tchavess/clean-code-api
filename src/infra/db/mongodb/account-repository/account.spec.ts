/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MongoHelper } from '../helpers/mongo-helpers'
import { AccountMongoRepository } from './account'
const DB = process.env.MONGO_URL!
describe('Account Mongo Respository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(DB)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  const makeSut = (): AccountMongoRepository => {
    return new AccountMongoRepository()
  }
  test('Should return an account on sucess', async () => {
    const sut = makeSut()
    const account = await sut.add({
      name: 'any_name',
      email: 'any_email',
      password: 'any_password'
    })
    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('any_name')
    expect(account.email).toBe('any_email')
    expect(account.password).toBe('any_password')
  })
})
