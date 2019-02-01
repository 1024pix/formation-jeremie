const server = require('../../lib/server');
const {expect} = require('../test-helper');

describe('routes.hello', () => {

  describe('GET /hello', () => {

    it('should return hello world', async () => {
      // given

      // when
      const response = await server.inject('/hello');

      // then
      expect(response.statusCode).to.equal(200);
      expect(response.result).to.equal('hello world');
    });
  });

});

