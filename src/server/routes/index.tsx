import * as express from 'express';
const routes = express.Router();

/**
 * Application API Routes
 * @returns       All '/api' Routes for the server.
 */
const AppRoutes = () => {    

    routes.get('/api/test', (req,res) => {
    res.json({ message: 'Hi, Server here.'});

    // Insert Other Routes Here

    
})
}

export default AppRoutes;