const server = require('../../lib/server');
const {expect, db} = require('../test-helper');
const {omit} = require('lodash');

describe('routes.items', () => {

  beforeEach(() => {
    return db.sequelize.sync();
  });

  afterEach(() => {
    return db.sequelize.drop();
  });

  describe('GET /items', () => {

    it('should return an empty array when no item was found', async () => {
      // when
      const response = await server.inject('/items');

      // then
      expect(response.result).to.deep.equal([]);
    });

    it('should return an array of items', async () => {
      // given
      const item1 = await db.Item.create({
        title: 'Qwant',
        url: 'https://www.qwant.com/login',
        username: 'lorem-ipsum@pix.fr',
        password: 'dolor_sit_amet',
        description: 'Le moteur de recherche qui respecte votre vie privée.'
      });
      const item2 = await db.Item.create({
        title: 'Firefox',
        url: 'https://support.mozilla.org/fr/users/auth',
        username: 'pandaroux@pix.fr',
        password: 'viveleucalyptus',
        description: 'Navigateur Web libre et gratuit'
      });

      // when
      const response = await server.inject('/items');

      // then
      const expectedResults = [
        {
          id: 1,
          title: 'Qwant',
          url: 'https://www.qwant.com/login',
          username: 'lorem-ipsum@pix.fr',
          password: 'dolor_sit_amet',
          description: 'Le moteur de recherche qui respecte votre vie privée.'
        },
        {
          id: 2,
          title: 'Firefox',
          url: 'https://support.mozilla.org/fr/users/auth',
          username: 'pandaroux@pix.fr',
          password: 'viveleucalyptus',
          description: 'Navigateur Web libre et gratuit'
        }];
      const itemsWithoutDate = response.result.map((item)=> omit(item, ['createdAt', 'updatedAt']));
      expect(itemsWithoutDate).to.have.deep.members(expectedResults);
    });

    it('should return an HTTP response with status code "200" and content type "application/json"', async () => {
      // when
      const response = await server.inject('/items');

      // then
      expect(response.statusCode).to.equal(200);
      expect(response.headers['content-type']).to.equal('application/json; charset=utf-8');
    });
  });

});
