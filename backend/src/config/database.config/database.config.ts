import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/licitalab',
  // Eliminamos las opciones obsoletas y solo mantenemos configuraciones válidas
}));
