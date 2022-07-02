const sumfunc = require('../../src/sum');


describe('Testing sum function', () => {

    test('add 1+2 and expect a 3', () => {
        expect(sumfunc(1,2)).toBe(3);           // For numbers, toBe and toEqual are the same
        expect(sumfunc(1,2)).not.toBe(0);
        expect(sumfunc(1,2)).toEqual(3);        // Deep value equality
        expect(sumfunc(1,2)).not.toBeNull();
        expect(sumfunc(1,2)).toBeDefined();
        expect(sumfunc(1,2)).not.toBeUndefined();
        expect(sumfunc(1,2)).not.toBeFalsy();
        expect(sumfunc(1,2)).toBeTruthy();

        expect(process.env.VAR).toBe("Hello World");
        
    });
    
});

