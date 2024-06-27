import { Request, Response, Router } from "express";

export class AppRoutes{
    static get routes():Router{
        
        const router = Router()

        router.use('/',(req:Request,res:Response)=>{
            return res.json({message:'hola'})
        })
        return router
    }
}