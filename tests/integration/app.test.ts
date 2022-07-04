import request from 'supertest';
import { app } from '../../src/app';

describe('Web services work', () => {

    // TODO Code to run before the tests
    // beforeAll(() => {}); 

    // TODO Code to run after the tests
    // afterAll(() => {}); 

    // TODO Code to run before each test
    // beforeEach(() => {});

    // TODO Code to run after each test
    // afterEach( () => {});

    // Implemented using done
    test('GET /', (done)=>{
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
    test('GET /json', () => {
        return request(app)
        .get("/json")
        .then(response => {
            expect(response).not.toBeNull();
            expect(response).toBeDefined();
            expect(response.status).toBe(200);
        });
    });

    // Implemented using done
    test('POST returns json, using done', (done) => {
        request(app)
        .post("/post")
        .send({ a:2, b:3 })
        .set('content-type', 'application/json')
        .expect("Content-Type", /json/)
        .expect(200)
        .then(response => {
            expect(response).not.toBeNull();
            expect(response).toBeDefined();
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('sum', 5);
            done();
        })
    });

    // Implemented using async/await
    test('POST returns json, using async/await', async () => {
        const response = await request(app)
            .post("/post")
            .send({ a:2, b:3 })
            .set('content-type', 'application/json');
        expect(response).not.toBeNull();
        expect(response).toBeDefined();
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('sum', 5);
    });



});

/*
Problems with open handle:
https://stackoverflow.com/questions/53935108/jest-did-not-exit-one-second-after-the-test-run-has-completed-using-express
https://stackoverflow.com/questions/66997288/jest-tests-leaking-due-to-improper-teardown

*/
