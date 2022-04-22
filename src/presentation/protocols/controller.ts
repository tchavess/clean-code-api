/* eslint-disable @typescript-eslint/no-unused-vars */
import { HttpResponse, HttpRequest } from '../protocols/http'

export interface Controller {
  handle (httpRequest: HttpRequest): Promise<HttpResponse | undefined>
}
