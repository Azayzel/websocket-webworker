import * as express from 'express';
import * as http from 'http'
import * as React from 'react';
import {renderToString} from 'react-dom/server';
import {ServerStyleSheet} from 'styled-components'
import App from '../client/App';
import Html from '../client/Html';
import AppRoutes from './routes/index';

const port = process.env.PORT || 3000;


// Setup Http Server
const base = express();

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



//Setup WebSockets


// Start Server
server.listen(port, () => {

    console.log(`Server started on ${port} :)`);
});