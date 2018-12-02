import * as express from 'express';
import * as http from 'http'
import * as React from 'react';
import * as mongoose from 'mongoose';
import * as cors from 'cors';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';
import * as errorHandler from 'errorhandler';
import * as morgan from 'morgan'
import {renderToString} from 'react-dom/server';
import {ServerStyleSheet} from 'styled-components'
import App from '../client/App';
import Html from '../client/Html';
import AppRoutes from './routes/index';

const port = process.env.PORT || 3000;
//Configure isProduction variable
const isProduction = process.env.NODE_ENV === 'production';
// Setup Http Server
const base = express();

// Configure base server
base.use(cors());
base.use(morgan());
base.use(bodyParser.urlencoded({extended: false}));
base.use(bodyParser.json());
base.use(session({ 
    secret: 'fullstack-node-git',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
 }));

if(!isProduction){
    base.use(errorHandler());
}

// Connect to Mongoose
mongoose.connect('mongodb://localhost/NodeGit-FullStack')
        .then((x) => console.log(`Connected to Database.`))
        .catch((err) => console.log("Error Connecting to Database: ", err));



// Index Route
base.get('/', (req, res) => {
    try {
        const sheet = new ServerStyleSheet();
        const body = renderToString(sheet.collectStyles(<App/>)); // <-- collecting styles
        const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet
        const title = 'TS SocketWorker';

        res.send(Html({body, styles, title}))
    } catch (e) {
        console.log("Error on index: ", e);
    }
})
// Assign Routes
base.use(AppRoutes);
const server = http.createServer(base);



//Setup and Start gitServer


// Start Server
server.listen(port, () => {

    console.log(`Server started on ${port} :)`);
   
});