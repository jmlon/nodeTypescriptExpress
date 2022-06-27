import express from "express";
require("dotenv").config();

console.log("Environment:", process.env.PORT);

const app = express();

app.get('/', (req,res) => {
    res.send("Demo Express+Typescript server.");
});

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});





