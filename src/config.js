import dotenv from "dotenv";


dotenv.config();

const settingDotEnv = () => {
    return {
        port: process.env.PORT,
        database: {
            host: process.env.DB_HOST
        },
        possword: process.env.PASSWORD,
        user_db: process.env.DB_USER,
        port_db: process.env.DB_PORT,
        claveSecreta: process.env.CLAVE_SECRETA
    }
}

export default settingDotEnv;
