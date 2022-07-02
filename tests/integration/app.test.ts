import { doesNotMatch } from 'assert';
import request from 'supertest';
// const app = require('../../src/app'); // Gives the famouos error: TypeError: app.address is not a function
const app = require('../../src/server');


describe('Web services work', () => {

    beforeAll(() => {
        // Setup envinronment, e.g. database
    });

    afterAll(() => {
        // Dispose of envinronment
    });


    // Implemented using done
    test('Root', (done)=>{
        request(app)
        .get("/")
        .then(response => {
            expect(response).not.toBeNull();
            expect(response).toBeDefined();
            expect(response.status).toBe(200);
            expect(response.text).toMatch(/^<html>/);

            done();
        });
    });


    // Implemented returning a Promise
    test('Get returns JSON', () => {
        return request(app)
        .get("/json")
        .then(response => {
            expect(response).not.toBeNull();
            expect(response).toBeDefined();
            expect(response.status).toBe(200);

        });
    });


    test('POST returns JSON', (done) => {
        request(app)
        .post("/post")
        .set('content-type', 'application/json')
        .send({ a:2, b:3 })
        .then(response => {
            expect(response).not.toBeNull();
            expect(response).toBeDefined();
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('sum', 5);

            done();
        });
    });

});
