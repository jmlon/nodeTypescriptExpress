import { sumFunct, listFunct, objectFunct } from '../../src/functions';

// Jest expect documentation:
// https://jestjs.io/docs/expect#tocontainitem


describe('FUNCTIONS testint', () => {

    test('Should read envinronment', () => {
        expect(process.env.VAR).toBe("Hello World");
    });

    test('sumFunct 1+2 and expect a 3', () => {
        expect(sumFunct(1,2)).toBeDefined();
        expect(sumFunct(1,2)).not.toBeNull();
        expect(sumFunct(1,2)).not.toBeUndefined();
        expect(sumFunct(1,2)).not.toBeFalsy();
        expect(sumFunct(1,2)).toBeTruthy();
        expect(sumFunct(1,2)).toBe(3);           // For numbers, toBe and toEqual are the same
        expect(sumFunct(1,2)).not.toBe(0);
        expect(sumFunct(1,2)).toEqual(3);        // Deep value equality
    });

    test('listFunc should return a list of numbers', () => {
        expect(listFunct()).toBeDefined();
        expect(listFunct()).not.toBeNull();
        expect(listFunct()).not.toBeUndefined();
        expect(listFunct()).not.toBeFalsy();
        expect(listFunct()).toBeTruthy();
        expect(listFunct()).toEqual(expect.arrayContaining([1,3]));
        expect(listFunct()).toEqual([1,2,3,4]);
        expect(listFunct()[0]).toBe(1);         // toBe uses Object.is
    });

    test('objectFunct should return an object with three attributes', () => {
        expect(objectFunct()).toBeDefined();
        expect(objectFunct()).not.toBeNull();
        expect(objectFunct()).not.toBeUndefined();
        expect(objectFunct()).not.toBeFalsy();
        expect(objectFunct()).toBeTruthy();
        expect(objectFunct()).toHaveProperty('name', 'foobar');
        expect(objectFunct()).toEqual({ age:123, name: 'foobar', balance:987654321n });
        expect(objectFunct().balance).toBe(987654321n);
    });
    
});

