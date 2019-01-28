const Hapi = require('hapi');
const inert = require('inert');
// const Path = require('path');
const Joi = require('joi');


// Create a server with a host and port
const server = Hapi.server({
  host: 'localhost',
  port: process.argv[2] || 8080,

});
// Start the server
const start = async () => {
  await server.register(inert);
  server.route({
    method: 'GET',
    path: '/chickens/{breed?}',
    handler: (request, h) => `Hello ${request.params.breed}`,
    config: {

      validate: {
        params: {
          // with: Joi.string().required(),
          breed: Joi.string().required(),
        },
      },
    },
  });

  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

start();

module.exports = server;
