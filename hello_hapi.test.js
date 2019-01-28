const server = require('./hello_hapi');

describe('server', () => {
  const options = {
    method: 'GET',
    url: '/',
  };
    // afterall
  it('should return hello hapi string', async () => {
    const temp = await server.inject(options);
    expect(temp.result).toEqual('Hello hapi');
  });
});
