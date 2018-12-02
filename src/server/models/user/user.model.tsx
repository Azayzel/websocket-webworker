import * as mongoose from 'mongoose';
import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import IUser from './user.interface';

export interface IUserModel extends IUser, mongoose.Document{};

export const UserSchema: mongoose.Schema = new mongoose.Schema({
    UserName: {type: String, required: true},
    GivenName: {type: String, required: true},
    Surname: {type: String, required: true},
    Email: {type: String, required: true},
    DisplayName: {type: String, required: true},
    RegisteredAt: {type: Date, required: true},
    Hash: {type: String},
    Salt: {type: String},
})

// JWT && Password methods
UserSchema.methods.setPassword = function(password) {
    this.Salt = crypto.randomBytes(16).toString('hex');
    this.Hash = crypto.pbkdf2Sync(password, this.Salt, 10000, 512, 'sha512')
}

UserSchema.methods.validatePassword = function(password) {
    const hash = crypto
        .pbkdf2Sync(password, this.Salt, 10000, 512, 'sha512')
        .toString('hex');
    return this.Hash === hash;
};

UserSchema.methods.generateJWT = function () {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        email: this.email,
        id: this._id,
        exp: parseInt((expirationDate.getTime() / 1000).toString(), 10)
    }, 'secret');
}

UserSchema.methods.toAuthJSON = function () {
    return {
        _id: this._id,
        email: this.email,
        token: this.generateJWT()
    };
};


const User = mongoose.model<IUserModel>("User", UserSchema);

export default User;