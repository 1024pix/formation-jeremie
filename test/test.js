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
        it('should return 1 when the value is found in the second position in the array', ()=>{
            // given
            const VALID_INDEX =  2;

            // when
            const result= [1,2,3].indexOf(VALID_INDEX);

            // then
            expect(result).to.equal(1)
        });
    });
});
