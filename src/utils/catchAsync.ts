import { Request, Response, NextFunction} from 'express';
interface callbackType { (req:Request, res:Response, next:NextFunction): Promise<void> }
/**
 * Return a function that catches and forwards any error a function throws to the next middleware 
 * 
 * @param {Function} fn - input function that catchAsync wraps around
 */
 function catchAsync(fn:callbackType) {
    return function(req:Request, res:Response, next:NextFunction) {
      Promise.resolve(fn(req, res, next)).catch((err) => next(err));
    }
  }
  
 export default catchAsync;