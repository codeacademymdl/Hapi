const server = require('./routes');

describe('server', () => {
  const option1 = {
    method: 'GET',
    url: '/vibhore',

  };
  const option2 = {
    method: 'GET',
    url: '/vibhore gupta',

  };
  const option3 = {
    method: 'GET',
    url: '/vibhore&gupta',

  };
  const option4 = {
    method: 'GET',
    url: '/vibhore<<>$?',

  };
  const option5 = {
    method: 'GET',
    url: '//',

  };


  it('should return "hello and name"', async () => {
    const temp = await server.inject(option1);
    expect(temp.result).toEqual('Hello vibhore');
  });

  it('checks url with space', async () => {
    const temp = await server.inject(option2);
    expect(temp.result).not.toEqual('Hello vibhore gupta');
  });
  it('check url with "&" sign', async () => {
    const temp = await server.inject(option3);
    expect(temp.result).not.toEqual('Hello vibhore&gupta');
  });
  it('check url with html tags', async () => {
    const temp = await server.inject(option4);
    expect(temp.result).not.toEqual('Hello <<>$?');
  });
  it('checks url with "/"', async () => {
    const temp = await server.inject(option5);
    expect(temp.result).not.toEqual('Hello //');
  });
});
