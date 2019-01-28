const server = require('./server1');

describe('server', () => {
  const options = {
    method: 'GET',
    url: '/ping',
  };
    // afterall
  it('should return "pong" when tried to access the path "./ping"', async () => {
    const temp = await server.inject(options);
    expect(temp.result).toEqual('pong');
  });
});
