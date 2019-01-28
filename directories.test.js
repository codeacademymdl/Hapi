const Path = require('path');
const server = require('./directories.js');

const content = `<html>
    <head><title>Hello Directories</title></head>
    <body>
        Hello Directories
    </body>
</html>`;


describe('server', () => {
  const options = {
    method: 'GET',
    url: '/foo/bar/baz/file.html',

  };


  it('should return file content"', async () => {
    const temp = await server.inject(options);
    expect(temp.result).toEqual(content);
  });
});
