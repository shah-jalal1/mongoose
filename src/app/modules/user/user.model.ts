import { Model, Schema, model } from "mongoose";
import { IUser, IUserMethods } from "./user.interface";

type UserModel = Model<IUser, {}, IUserMethods>;

// creating schema using interface
const userSchema = new Schema<IUser>({
    id: {
        type: String,
        required: true,
        unique: true
    },

    roll: {
        type: String,
        required: true
    },
    name: {
        firstName: {
            type: String,
            required: true
        },
        middleName: {
            type: String,
        },

        lastName: {
            type: String,
            required: true
        },

    },

    password: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String
    },
    gender: {
        type: String,
        enum: ['male', 'female']
    },
    email: {
        type: String,
    },
    contactNo: {
        type: String,
        required: true
    },
    emergencyContactNo: {
        type: String,
        required: true
    },
    presentAddress: {
        type: String,
        required: true
    },
    permanentAddress: {
        type: String,
        required: true
    }
});

const User = model<IUser>('User', userSchema);

export default User;

// instance methods -> instance er methods
// class -> instance + methods -> instance methods