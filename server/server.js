import express from 'express';
import http from 'http';
import fs from 'fs';
import path from 'path';
import React from 'react';
var ReactDOMServer = require('react-dom/server');
import { StaticRouter } from 'react-router-dom';
import App from '../src/App';
var expressStaticGzip = require("express-static-gzip");
var compression = require('compression')
const app = express();

const PORT = 8000;

// For each request for .js file
// return the compressed version .gz
// Path to build directory
const clientDirPath = path.resolve(__dirname, 'build');
app.get('*.js', function (req, res, next) {
    const pathToGzipFile = req.url + '.gz';
    try {
      // Check if .gz file exists
      if (fs.existsSync(path.join(clientDirPath, pathToGzipFile))) {
        // Change the requested .js to return
        // the compressed version - filename.js.gz
        req.url = req.url + '.gz';
        // Tell the browser the file is compressed and it should decompress it.
        // You will get a blank screen without this header because it will try to parse
        // the compressed file.
        res.set('Content-Encoding', 'gzip');
        res.set('Content-Type', 'text/javascript');
      }
    } catch (err) {
      console.error(err);
    }
  
    next();
  });

app.use(compression());
  
app.use('^/$', (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).send("Some Error Happened");
        }

    
        const context = {};
        
        const html = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
              <App />
            </StaticRouter>);

      
        return res.send(data.replace('<div id="root"></div>',
            `<div id="root">${html}</div>`))
    })
})

app.use(express.static(path.resolve(__dirname, '..', 'build')))


app.listen(PORT, () => {
    console.log(`App Launched on ${PORT}`)
})