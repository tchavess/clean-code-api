import request from "supertest"
import app from "../config/app"
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helpers'
import env from '../config/env'
describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(env.mongoUrl)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Thiago Chaves',
        email: 'thiago.chaves04@gmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
