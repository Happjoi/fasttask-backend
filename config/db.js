import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

export const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log('MongoDB conectado');
    } catch (error) {
      console.error('Erro na conexão com o banco:', error);
      process.exit(1);
    }
  };

  export default connectDB;