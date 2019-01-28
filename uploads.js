const Hapi = require('hapi');
const inert = require('inert');
// const Path = require('path');
// const Joi = require('joi');


// Create a server with a host and port
const server = Hapi.server({
  host: 'localhost',
  port: process.argv[2] || 8080,

});
// Start the server
const start = async () => {
  server.route({
    method: 'POST',
    path: '/upload',
    config: {
      handler: (request, h) => new Promise((resolve, reject) => {
        let body = '';

        request.payload.file.on('data', (data) => {
          body += data;
        });

        request.payload.file.on('end', () => {
          const result = {
            description: request.payload.description,
            file: {
              data: body,
              filename: request.payload.file.hapi.filename,
              headers: request.payload.file.hapi.headers,
            },
          };

          return resolve(JSON.stringify(result));
        });

        request.payload.file.on('error', err => reject(err));
      }),
      payload: {
        output: 'stream',
        parse: true,
        allow: 'multipart/form-data',
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
