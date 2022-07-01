import express from "express";
require("dotenv").config();

console.log("Environment:", process.env.PORT);

const app = express();
app.use(express.json());                // parse JSON body

app.get('/', (req,res) => {
    res.send("<html><body>Demo Express+Typescript server.</body></html>");
});

app.get('/json', (_,res) => {
    res.json({ a:1, b:true, c:'hello world' });
});

app.post('/post', (req,res) => {
    // console.log('BODY', req.body);
    const sum = req.body.a+req.body.b;
    // console.log(`${req.body.a}, ${req.body.b}, ${sum}`);
    res.json({ sum: sum });
});

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});

export default app;



