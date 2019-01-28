const Hapi = require('hapi');
const Auth = require('hapi-auth-basic');

const validate = async (request, username, password, h) => {
  const isValid = username === 'hapi' && password === 'auth';

  return { isValid, credentials: { name: 'hapi' } };
};
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
    // return'Hello hapi';
    return `Hello!!!`;
  },
});

// Start the server
const start = async function () {
  try {
    await server.register(Auth);

    server.auth.strategy('simple', 'basic', { validateFunc: validate });
    server.auth.default('simple');


    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('Server running at:', server.info.uri);
};

start();

module.exports = server;
