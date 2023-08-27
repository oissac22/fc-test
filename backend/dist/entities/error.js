"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPStatus = exports.HTTPException = void 0;
class HTTPException extends Error {
    status;
    constructor(message, status, name) {
        super(message);
        this.status = status;
        super.name = name || 'Error';
    }
}
exports.HTTPException = HTTPException;
class HTTPStatus {
    static OK = 200;
    static UNAUTHORIZED = 401;
    static NOT_FOUND = 404;
    static INTERNAL_SERVER_ERROR = 500;
    static NOT_ACCEPTABLE = 406;
}
exports.HTTPStatus = HTTPStatus;
