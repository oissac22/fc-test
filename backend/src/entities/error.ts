export class HTTPException extends Error {
    constructor(
        message:string,
        readonly status:number,
        name?: string
    )
    {
        super(message);
        super.name = name || 'Error';
    }
}

export class HTTPStatus {
    static OK = 200;
    static UNAUTHORIZED = 401;
    static NOT_FOUND = 404;
    static INTERNAL_SERVER_ERROR = 500;
    static NOT_ACCEPTABLE = 406;
}