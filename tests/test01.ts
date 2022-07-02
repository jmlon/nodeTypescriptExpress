import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import { app } from '../src/app';

chai.use(chaiHttp);
chai.should();

describe("SERVER", () => {

    beforeEach((done) => {
        // Initialize testing environment before each test
        done();
    });

    describe("root", () => {

        it("Should return html page", (done) => {
            chai.request(app)
            .get("/")
            .end((err,res) => {
                // console.log(res);
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.html;
                // console.log(res.text);
                expect(res.text).to.be.a('string');
                expect(res.text).to.match(/^<html>/);
                done();
            });
        });

    });


    describe("GET returns JSON", () => {
        it("Should return a json object", (done) => {
            chai.request(app)
            .get("/json")
            .end((err,res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.have.header('content-type', 'application/json; charset=utf-8');
                expect(res).to.be.json;
                // console.log(res.body);
                expect(res.body).to.have.all.keys('a', 'b', 'c');
                expect(res.body).to.have.own.property('a');
                expect(res.body).to.have.own.property('b');
                expect(res.body).to.have.own.property('c');
                expect(res.body.a).to.equal(1);
                expect(res.body.b).to.be.true;
                expect(res.body.c).to.be.a('string');
                expect(res.body.c).to.eql('hello world');
                expect(res.body.c).to.match(/llo wo/);
                expect(res.body.c).to.match(/^he/);
                expect(res.body.c).to.match(/ld$/);
                done();
            });

        });
    });


    describe("POST returns JSON", () => {
        it("Post request should add", (done) => {
            chai.request(app)
            .post("/post")
            .set('content-type', 'application/json')
            .send({ a:2, b:3 })
            .end((err,res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                // console.log(res.body);
                expect(res.body).to.have.own.property('sum');
                expect(res.body.sum).to.be.a('number');
                expect(res.body.sum).to.eql(5);
                done();
            });
        });
    });


});


