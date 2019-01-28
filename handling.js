const Hapi = require('hapi');
const inert = require('inert');


// Create a server with a host and port
const server = Hapi.server({
  host: 'localhost',
  port: 8080,

});

// Add the route


// Start the server
const start = async () => {
  await server.register(inert);

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => h.file('index.html'),

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
