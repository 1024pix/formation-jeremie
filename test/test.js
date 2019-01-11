const chai = require('chai');
const expect = chai.expect;

describe('Array',  () => {
    describe('#indexOf()',  () => {
        it('should return -1 when the value is not present',  () => {
            // given
            const INVALID_INDEX = 4;

            // when
            const result = [1, 2, 3].indexOf(INVALID_INDEX);

            // then
            expect(result).to.equal(-1);
        });
    });
});