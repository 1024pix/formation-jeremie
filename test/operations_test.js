const operations = require('../lib/operations');
const {expect} = require('./test-helper');

describe('Operations', () => {
  describe('#add', ()=>{
    it('should return -1 when we add 0 to 0', () => {
      // given
      const a = 0;
      const b = 0;

      // when
      const result = operations.add(a,b);

      // then
      expect(result).to.equal(-1);
    });
    it('should return 3 when we add 1 to 2', ()=>{
      // given
      const a = 1;
      const b = 2;

      // when
      const result = operations.add(a,b);

      // then
      expect(result).to.equal(3);
    })
  })
});
