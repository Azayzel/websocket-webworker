import * as mongoose from 'mongoose';
import * as passport from 'passport';
import * as localStrategy from 'passport-local';

const User = mongoose.model('User');

passport.use(new localStrategy({
    usernameField: 'user[email]',
    passwordField: 'user[password]'
    }, (email, password, done) => {
        User.findOne({ email })
            .then((user) => {
                if(!user || !user){}
            })
    }
))