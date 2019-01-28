const Hapi = require('hapi');
// const server = new Hapi.Server();

// Create a server with a host and port
const server = Hapi.server({
  host: 'localhost',
  port: 8080,
});

// Add the route
server.route({
  method: 'GET',
  path: '/',
  handler(request, h) {
    return 'hello hapi';
  },
});

// Start the server
const start = async () => {
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
