// For testing is better to separate app and server
import express from "express";
import { Request, Response } from 'express';
require("dotenv").config();
export const app = express();

app.use(express.json());                // parse JSON body

app.get('/', (_, res:Response) => {
    res.send("<html><body>Demo Express+Typescript server.</body></html>");
});

app.get('/json', (_,res:Response) => {
    res.json({ a:1, b:true, c:'hello world' });
});

app.post('/post', (req:Request,res:Response) => {
    // console.log('BODY', req.body);
    const sum = req.body.a+req.body.b;
    // console.log(`${req.body.a}, ${req.body.b}, ${sum}`);
    res.json({ sum: sum });
});

