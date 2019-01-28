const Hapi = require('hapi');
const ping = require('./routes/ping');


// const server = new Hapi.Server();

// Create a server with a host and port
const server = Hapi.server({
  host: 'localhost',
  port: 8080,
});


server.route(ping);

// Start the server
const start = async function () {
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
