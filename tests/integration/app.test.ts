import { Server } from 'http';
import request from 'supertest';
// const app = require('../../src/app'); // Gives the famouos error: TypeError: app.address is not a function
// const app = require('../../src/server');
import { app } from '../../src/app';

describe('Web services work', () => {

    let server: Server|null = null;

    beforeAll((done) => {
        // Setup envinronment, e.g. database
        server = app.listen(process.env.PORT, () => {
            console.log(`Server running at http://${process.env.HOST}:${process.env.PORT}`);
            done();
        });
        
    });

    afterAll(async () => {
        await server?.close();
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
