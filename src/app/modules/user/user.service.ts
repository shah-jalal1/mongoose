import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
    const user = new User(payload);   // User = class   user = instance
    await user.save()  // build in instance method (another have custom instance method)

    return user;
}

export const getUsersFromDB = async (): Promise<IUser[]> => {
    const users = await User.find();
    return users;
}

export const getUserByIdFromDB = async (payload: string): Promise<IUser | null> => {
    // get full data
    // const user = await User.findOne({ id: payload });

    // get specific data
    const user = await User.findOne(
        { id: payload },
        {
            name: 1,
            contactNo: 1
        }
    );

    return user;
}
