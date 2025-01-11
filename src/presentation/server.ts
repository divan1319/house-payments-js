import express, { Router } from "express";

interface Options{
port:number
routes:Router
publicPath:string
}


export class Server {
  public readonly app = express();

  private serverListener?: any;

  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router;

  constructor(options:Options){
    const {port,routes,publicPath = 'public'} = options

    this.port = port
    this.publicPath = publicPath
    this.routes = routes
  }

  async start(){

    /**Middlewares para obtener la informacion */

    this.app.use(express.json()) //raw data
    this.app.use(express.urlencoded({extended:true})) //x-www-form-urlencoded data

    //Rutas
    this.app.use(this.routes)

    //levantar el proyecto
    this.serverListener = this.app.listen(this.port,()=>{
        console.log(`Server runing on: localhost:${this.port}`)
    })

  }

  public close(){
    this.serverListener?.close()
  }
}
