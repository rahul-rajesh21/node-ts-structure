import dotenv from 'dotenv';
import path from'path';


dotenv.config({ path: path.join(__dirname, '../../.env') });



function validateEnvVar():any{

    const envVar = {
        port: process.env.NODE_PORT,
        env: process.env.NODE_ENV,
        prisma:{
            "url": process.env.DATABASE_URL,
            
        }
    }

    if(!envVar.port){
        throw new Error("application port not defined")
    }

    if(!envVar.env){
        throw new Error("application env has not been defined")
    }

    if(!envVar.prisma.url){
        throw new Error("unable to connect to db url not found")
    }

    return envVar;
}

const config = validateEnvVar()
export default config;