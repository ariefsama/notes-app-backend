// const Hapi = require('@hapi/hapi');
// const routes = require('./routes');
import Hapi from '@hapi/hapi';
// const Hapi = '@hapi/hapi';
import { routes } from './routes.js'

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',

    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });


  server.route(routes);

  await server.start();
  console.log(`Server sedang berjalan pada ${server.info.uri}`);
};

init();
