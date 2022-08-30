import HttpStatusCodes from 'http-status-codes';


export abstract class CustomError extends Error {

    public readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;

    constructor(msg: string, httpStatus: number) {
        super(msg);
        this.HttpStatus = httpStatus;
    }
}


export class ParamMissingError extends CustomError {

    public static readonly Msg = 'One or more of the required parameters was missing.';
    public static readonly HttpStatus = HttpStatusCodes.BAD_REQUEST;

    constructor() {
        super(ParamMissingError.Msg, ParamMissingError.HttpStatus);
    }
}


export class UserNotFoundError extends CustomError {

    public static readonly Msg = 'A user with the given id does not exists in the database.';
    public static readonly HttpStatus = HttpStatusCodes.NOT_FOUND;

    constructor() {
        super(UserNotFoundError.Msg, UserNotFoundError.HttpStatus);
    }
}

export class PrismaError extends CustomError {
    
    constructor(errorMessage:string, httpStatus:number) {
        super(errorMessage, httpStatus);
    }
}

export class RouteNotFound extends CustomError {

    public static readonly msg = 'Requested Route Could Not Be Found.';
    public static readonly httpStatus = HttpStatusCodes.BAD_REQUEST;

    constructor() {
        super(RouteNotFound.msg, RouteNotFound.httpStatus);
    }
}