import 'babel-polyfill';
const express = require('express');
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './src/App';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(express.static('build'));

const PORT = process.env.PORT || 3000;

app.get('*',(req,res)=>{
    res.send('this is my app');
    const context = {};
    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
            <App/>
        </StaticRouter>
    );

    const html = `${content}`
})

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`)
})