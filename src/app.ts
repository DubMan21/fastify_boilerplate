import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { ServerResponse } from 'http';
import env from 'dotenv';
import mongoose from 'mongoose';

env.config();

export const build = (opts = {}): FastifyInstance => {
  const app = fastify(opts);

  mongoose.connect(`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@mongodb?authSource=admin`, {
    dbName: process.env.MONGODB_DATABASE_NAME,
  });

  app.get('/', async (_request: FastifyRequest, reply: FastifyReply<ServerResponse>): Promise<FastifyReply<ServerResponse>> => {
    return reply.send('API is alive');
  });

  return app;
};
