const server = require('./handling');

const content = `"<html>
<head><title>Hello Handling</title></head>
<body>
    Hello Handling
</body>
</html>"`;

describe('server', () => {
  const options = {
    method: 'GET',
    url: '/',
  };
    // afterall
  it('should return file content"', async () => {
    const temp = await server.inject(options);
    expect(temp.result).toEqual(content);
  });
});
