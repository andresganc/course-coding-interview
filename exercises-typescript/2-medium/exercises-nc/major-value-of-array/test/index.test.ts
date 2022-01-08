
import majorValueArray from '../src/'

describe('MAJOR VALUE OF ARRAY ', () => {
    
    test('Should get number major', () => {
        
        //const value = 2 + 2;
        //expect(value).toBe(4);

        expect(majorValueArray([8, 5000, 987, 43, 4999, 456])).toBe(5000)

    })

})
