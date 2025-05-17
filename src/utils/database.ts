import mongoose from 'mongoose';
import {config} from '../config';

export const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURL)
        console.log('Conectado a la base de datos (=__=)');
        
    }
    catch (error) {
        if (error instanceof Error) {
            console.log('Error al conectar con la base de datos -', error.message);
        } else {
            console.log('Error al conectar con la base de datos');
        }
    }
}