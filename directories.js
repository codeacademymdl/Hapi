const Hapi = require('hapi');
const inert = require('inert');
const Path = require('path');


// Create a server with a host and port
const server = Hapi.server({
  host: 'localhost',
  port: 3005,

});
// Start the server
const start = async () => {
  await server.register(inert);
  server.route({
    method: 'GET',
    path: '/foo/bar/baz/{file}',
    handler: {
      directory: {
        path: Path.join(__dirname, 'public'),
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

// start();

module.exports = server;
