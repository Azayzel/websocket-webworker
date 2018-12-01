import * as express from 'express';
import * as mongoose from 'mongoose';
const router = express.Router();
import User from '../../models/user/user.model';


// User API

// New User Registration
router.get('/register', (req, res, next) => {
   User.create(req.body, (err, post) => {
       if (err) return next(err);
       res.json(post);
   })
});

// Get One By 
