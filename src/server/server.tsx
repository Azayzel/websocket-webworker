import express from 'express';
import * as http from 'http2'
import AppRoutes from './routes/index';

const port = process.env.PORT || 3000;

// Setup Http Server
const exp = express();

// Assign Routes
exp.use(AppRoutes);
const server = http.createServer(exp);



//Setup WebSockets


// Start Server
server.listen(port, () => {

    console.log(`Server started on ${port} :)`);
});