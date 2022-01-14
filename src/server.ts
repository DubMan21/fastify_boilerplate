import { build } from './app';

const app = build({ logger: true });

const start = async (): Promise<void> => {
  try {
    await app.ready();
    await app.listen(parseInt(process.env.APP_PORT, 10), '0.0.0.0');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();