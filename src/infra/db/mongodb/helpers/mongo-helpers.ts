/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MongoClient, Collection } from 'mongodb'

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  server: {
    poolSize: Number(process.env.POOL_SIZE)
  }
}

export const MongoHelper = {
  client: null as unknown as MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(process.env.MONGO_URL!, this.options)
  },

  async disconnect (): Promise<void> {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  }
}
