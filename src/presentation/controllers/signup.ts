// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
export class SignUpController {
    handle (httpRequest: HttpRequest): HttpResponse {
        if (!httpRequest.body?.name) {
            return {
                statusCode: 400,
                body: new MissingParamError('name')
            }
        }

        if (!httpRequest.body?.email) {
            return {
                statusCode: 400,
                body: new MissingParamError('email')
            }
        }
        const response: HttpResponse = {
            statusCode: 200,
            body: 'Sucess'
        }
        return response
    }
}
