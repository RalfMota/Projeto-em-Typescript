import {Request} from "express";

const store = function(request:Request, response:Response){
    response.json('store');   
}

export {store}