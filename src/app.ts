import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { ServerResponse } from 'http';
import db from './config/db';
import env from 'dotenv';

env.config();

export const build = (opts = {}): FastifyInstance => {
  const app = fastify(opts);

  app.register(db);

  app.get('/', async (_request: FastifyRequest, reply: FastifyReply<ServerResponse>): Promise<FastifyReply<ServerResponse>> => {
    return reply.send('API is alive');
  });

  return app;
};
