# nodeTypescriptExpress
Boilerplate code to start express projects with Typescript


## Project commands
|Command|Function|
|-|-|
|`yarn run dev`  |Run in development mode|
|`yarn run test` |Run test cases |
|`yarn run start`|Run in production|
|`yarn run build`|Build the deployable version|
|`yarn build`|Transpile the project|
|`yarn clean`|Clean compiled files|


For Mocha:
```
  "scripts": {
    "test": "mocha --require ts-node/register tests/*.ts --timeout 10000 --exit",
```

For Jest:
```
  "scripts": {
    "test": "jest --runInBand --detectOpenHandles",
```
For creating a jest configuration:
```
npx ts-jest config:init
```

Another way of running Jest:
`npx jest`

## Making requests to the web-service
Using the CLI postman
```
curl 'http://172.27.96.1:3000/'
```

## Testing Frameworks
Mocha, Chai

Jest, Supertest



## References

### Project configuration and testing with Jest

[How to test Express.js with Jest and Supertest](https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/)  
[Easiest way to Test TypeScript using Jest](https://dev.to/silvenleaf/easiest-way-to-test-typescript-using-jest-by-silvenleaf-iem)  
[Testing TypeScript apps using Jest](https://blog.logrocket.com/testing-typescript-apps-using-jest/)  
[Testing Express Api with Jest and Supertest](https://dev.to/franciscomendes10866/testing-express-api-with-jest-and-supertest-3gf)  
[Writing API Tests with Jest](https://www.rithmschool.com/courses/intermediate-node-express/api-tests-with-jest)  
[Testing express js app (Typescript) using jest and supertest](https://medium.com/@natnael.awel/how-to-setup-testing-for-typescript-with-express-js-example-83d3efbb6fd4)  
[Clean Architecture: TypeScript Express API](https://paulallies.medium.com/clean-architecture-typescript-express-api-b90846794998)  

[TypeScript Unit Testing 101: A Developer’s Guide](https://www.testim.io/blog/typescript-unit-testing-101/)  

[Skeleton for Node.js Apps written in TypeScript (with Setup Instructions for ESLint, Prettier, and Husky)](https://javascript.plainenglish.io/skeleton-for-node-js-apps-written-in-typescript-444fa1695b30)  
[Testing with Jest in TypeScript and Node.js for Beginners](https://javascript.plainenglish.io/beginners-guide-to-testing-jest-with-node-typescript-1f46a1b87dad)  
[Building A Scalable API Testing Framework With Jest And SuperTest](https://www.velotio.com/engineering-blog/scalable-api-testing-framework-with-jest-and-supertest)  

[Introduction To Testing In JavaScript With Jest](https://youtu.be/FgnxcUQ5vho)  

[How to Unit Test Express Middleware - Jest](https://medium.com/javascript-in-plain-english/how-to-unit-test-express-middleware-typescript-jest-c6a7ad166e74)  



### Testing with ts-node, mocha, chai

[How to run Mocha tests written in TypeScript?](https://stackoverflow.com/questions/26977722/how-to-run-mocha-tests-written-in-typescript)  

[How Setting Up Unit Tests With TypeScript](https://medium.com/swlh/how-to-setting-up-unit-tests-with-typescript-871c0f4f1609)

[Quick Introduction: Mocha, Chai and Chai-http Test Express API Auth Endpoints](https://blog.khophi.co/mocha-chai-chai-http-test-express-api-auth-endpoints/)  


### Documentation
[chai-expect api](https://www.chaijs.com/api/bdd/)  
[chai-http](https://www.chaijs.com/plugins/chai-http/)  
[chai-json](https://www.chaijs.com/plugins/chai-json/)  
[mocha](https://mochajs.org/)  
[jest](https://jestjs.io/docs/getting-started)  
[Supertest](https://github.com/visionmedia/supertest#readme)  






