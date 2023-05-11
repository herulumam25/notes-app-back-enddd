const ClientError = require ('./ClientErrors')

class NotFoundError extends ClientError {
    constructor(message) {
        super(message,400);
        this.name = 'NotFoundError';

    }
}
module.exports = NotFoundError;