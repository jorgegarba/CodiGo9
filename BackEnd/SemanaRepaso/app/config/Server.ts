import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { conexion } from './sequelize';

export class Server {
    public app: express.Application;
    public PUERTO = process.env.PORT || 5000;
    constructor() {
        this.app = express();
        this.CORS();
        this.configurarBodyParser();
        this.configurarRutas();

    }
    CORS() {
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            // Para indicar que dominios pueden acceder a mi API
            res.header('Access-Control-Allow-Origin', '*');
            // Que cabeceras o headers pueden ser enviadas a mi API
            res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type, Accept, Access-Control-Allow-Request-Method');
            // Para indicar que metodos van a poder ser invocados
            res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
            res.header('Allow', 'GET,POST,PUT,DELETE');
            next();
        })
    }
    configurarBodyParser() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    configurarRutas() {
        this.app.get("/", (req: Request, res: Response) => {
            res.status(200).json({
                mensaje: 'La api se levanto con exito!'
            })
        })
    }
    iniciar() {
        this.app.listen(this.PUERTO, () => {
            // force sirve para resetear por completo la base de datos, hace un drop y luego crea la bd con su tablas
            // alter a diferencia del force, mira los cambios (modificacion de tipo de columna, long de caract) y hace la modificacion a sola esa columna sin borrar la base de datos 
            conexion.sync({force:false, alter: true}).then(()=>{
                console.log("BD creada con exito");
            }).catch((error:any)=>{
                console.error("ERROR AL CREAR LA BD");
                console.error(error);
            });
            console.log("Servidor corriendo exitosamente en el puerto:" + this.PUERTO);
        })
    }
}