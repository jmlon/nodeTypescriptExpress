import chai, { expect } from 'chai';
import { sumFunct, listFunct, objectFunct } from '../src/functions';

chai.should();

describe('FUNCTIONS', () => {

    describe('Environment variables', () => {
        it("Should read environment variables", () => {
            expect(process.env.VAR).to.not.be.null;
            expect(process.env.VAR).to.not.be.undefined;
            expect(process.env.VAR).to.be.a('string');
            expect(process.env.VAR).to.match(/llo Wor/);
            expect(process.env.VAR).to.eql('Hello World');      // deep equal
            expect(process.env.VAR).to.equal('Hello World');    // strict equal ===
        });
    });

    describe('Functions should return expected value', () => {

        it('sumFunct 1+2 and expect a 3', () => {
            expect(sumFunct(1, 2)).to.not.be.null;
            expect(sumFunct(1, 2)).to.not.be.undefined;
            expect(sumFunct(1, 2)).to.be.a('number');
            expect(sumFunct(1, 2)).to.eql(3);       // deep equal
            expect(sumFunct(1, 2)).to.equal(3);     // strict equal ===
        });

        it('listFunc should return a list of numbers', () => {
            expect(listFunct()).to.not.be.null;
            expect(listFunct()).to.not.be.undefined;
            expect(listFunct()).to.be.an('array');
            expect(listFunct()).to.not.be.empty;
            expect(listFunct()).to.include(1);
            expect(listFunct()).to.be.an('array').that.includes(2);
            expect(listFunct()).to.have.lengthOf(4);
            expect(listFunct()).to.deep.equal([1,2,3,4]);
            expect(listFunct()).to.eql([1,2,3,4]);
        });

        it('objectFunct should return an object with three attributes', () => {
            expect(objectFunct()).to.not.be.null;
            expect(objectFunct()).to.not.be.undefined;
            expect(objectFunct()).to.be.an('object');
            expect(objectFunct()).to.not.be.empty;
            expect(objectFunct()).to.have.property('name');
            expect(objectFunct()).to.own.property('name');
            expect(objectFunct()).to.not.have.any.keys('gender','children');
            expect(objectFunct()).to.have.all.keys('name', 'age', 'balance');
            expect(objectFunct().name).to.be.a('string');
            expect(objectFunct().age).to.be.a('number');
            expect(objectFunct().balance).to.be.a('bigint');
            expect(objectFunct()).to.deep.equal({ age:123, name: 'foobar', balance:987654321n });
        });

    });

});