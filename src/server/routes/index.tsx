import express, { RequestHandler } from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from '../../client/App';
import Html from '../../client/Html';
const routes = express.Router();

/**
 * Application API Routes
 * @returns       All '/api' Routes for the server.
 */
const AppRoutes = () => {

    routes.get('/', (req, res) =>{

        /**
         * Base URL
         */

         const body = renderToString(<App/>);
         const title = 'TS SocketWorker';

         res.send(
             Html({
                 body,
                 title
             })
         )
    })
    

    routes.get('/test', (req,res) => {
    res.status(200).json({ message: 'Hi, Server here.'});

    // Insert Other Routes Here

    
})
}

export default AppRoutes;