/* eslint-disable no-unused-expressions */
import { LogErrorRepository } from "../../data/protocols/log-error-repository"
import { Controller, HttpResponse, HttpRequest } from "../../presentation/protocols"

export class LogControllerDecorator implements Controller {
  private readonly controller: Controller
  // private readonly logErrorRepository: LogErrorRepository

  constructor (controller: Controller/*, logErrorRepository: LogErrorRepository */) {
    this.controller = controller
    // this.logErrorRepository = logErrorRepository
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse | undefined> {
    const httpResponse = await this.controller.handle(httpRequest)
    if (httpResponse) {
      // if (httpResponse?.statusCode === 500) {
      //   await this.logErrorRepository.log(httpResponse.body.stack)
      // }
      return httpResponse
    }
  }
}
