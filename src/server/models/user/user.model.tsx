import * as mongoose from 'mongoose';
import IUser from './user.interface';

export interface IUserModel extends IUser, mongoose.Document{};

export const UserSchema: mongoose.Schema = new mongoose.Schema({
    UserName: {type: String, required: true},
    GivenName: {type: String, required: true},
    Surname: {type: String, required: true},
    Email: {type: String, required: true},
    DisplayName: {type: String, required: true},
    RegisteredAt: {type: Date, required: true},
})

const User = mongoose.model<IUserModel>("User", UserSchema);

export default User;