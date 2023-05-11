class ClientErrors extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.stattusCode = statusCode;
        this.name = 'ClientError';
    }
}

module.exports = ClientErrors;