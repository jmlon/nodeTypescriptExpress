// For testing is better to separate app and server. Server not used in tests

import { app } from './app';
// const  app  = require('./app');
// console.log("Environment:", process.env.HOST, process.env.PORT);

const server = app.listen(process.env.PORT, () => {
    console.log(`Server running at http://${process.env.HOST}:${process.env.PORT}`);
});

module.exports = server;