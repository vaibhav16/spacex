import express from 'express';
import http from 'http';
import fs from 'fs';
import path from 'path';
import React from 'react';
var ReactDOMServer = require('react-dom/server');
import { StaticRouter } from 'react-router-dom';
import App from '../src/App';

const app = express();

const PORT = 8000;

const router = express.Router();

app.use('/build',express.static('build'));

app.use((req,res,next)=>{
    if(/\.js|\.css|\.png/.test(req.path)){
        res.redirect('/build'+req.path);
    }
    else{
        next();
    }
});


app.get('*', (req, res) => {

    const context = {};
        
    const app = ReactDOMServer.renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>);

    const indexFile = path.resolve('./build/index.html');   

    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Some Error Happened");
        }
        return res.send(data.replace('<div id="root"></div>',
            `<div id="root">${app}</div>`))
    })
})


// app.use('^/$', (req, res) => {

      
//     const context = {};
        
//     const html = ReactDOMServer.renderToString(
//         <StaticRouter location={req.url} context={context}>
//           <App />
//         </StaticRouter>);

//     fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
//         if (err) {
//             console.log(err);
//             return res.status(500).send("Some Error Happened");
//         }
      
//         return res.send(data.replace('<div id="root"></div>',
//             `<div id="root">${html}</div>`))
//     })
// })

router.use(express.static(path.resolve(__dirname, '..', 'build')))

app.use(router);


app.listen(PORT, () => {
    console.log(`App Launched on ${PORT}`)
})