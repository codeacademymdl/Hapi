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
    method: 'POST',
    path: '/login',
    handler: (request, h) => 'login successful',

    config: {
      validate: {
        payload: Joi.object({
          username: Joi.string().when('isGuest', { is: false, then: Joi.required() }),
          password: Joi.string().alphanum(),
          accessToken: Joi.string().alphanum(),
          isGuest: Joi.boolean().required(),

        })
          .options({ allowUnknown: true }).without('password', 'accessToken'),
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
