/**
 * Class which extend the class Error from NodeJs allowing us to customize the error message
 */
export class APIError extends Error{
    constructor(message, code) {
        super(message);
        this.statusCode = code;
    }

}