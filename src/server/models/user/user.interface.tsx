interface IUser {
    Id: number;
    UserName: string;
    GivenName: string;
    Surname: string;
    Email: string;
    DisplayName: string;
    RegisteredAt: Date;
    Hash: string;
    Salt: string;
    setPassword: Function;
    validatePassword: Function;
    generateJWT: Function;
    toAuthJSON: Function;
}

export default IUser;