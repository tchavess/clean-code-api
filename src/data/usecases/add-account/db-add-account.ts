/* eslint-disable @typescript-eslint/no-floating-promises */
import { AccountModel, AddAccount, AddAccountModel, Encrypter } from "../add-account/db-add-account-protocols"
export class DbAddAccount implements AddAccount {
  private readonly encrypter: Encrypter

  constructor (encrypter: Encrypter) {
    this.encrypter = encrypter
  }

  async add (account: any /* AddAccountModel */): Promise<any>/* : Promise<AccountModel> */ {
    this.encrypter.encrypt(account.password)
    return new Promise(resolve => resolve(null))
  }
}
