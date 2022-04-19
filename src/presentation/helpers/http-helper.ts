/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/quotes
import { HttpResponse } from "../protocols/http"

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})
