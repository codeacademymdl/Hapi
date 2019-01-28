const ping = {
  method: 'GET',
  path: '/ping',
  handler(request, h) {
    // return'Hello hapi';
    return 'pong';
  },
};


module.exports = ping;
