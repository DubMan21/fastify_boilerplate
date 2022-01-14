import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import mongoose from 'mongoose';

const connectDb = async (fastify: FastifyInstance) => {
  try {
    mongoose.connection.on('connected', () => {
      fastify.log.info({ actor: 'MongoDB' }, 'connected');
    });
    mongoose.connection.on('disconnected', () => {
      fastify.log.error({ actor: 'MongoDB' }, 'disconnected');
    });
    mongoose.connect(`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb?authSource=admin`, {
      dbName: process.env.MONGODB_DATABASE_NAME,
    });
  } catch (error) {
    console.error(error);
  }
};
export default fp(connectDb);