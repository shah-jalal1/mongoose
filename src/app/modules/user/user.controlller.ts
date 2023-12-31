import { NextFunction, Request, Response } from "express";
import { createUserToDB, getAdminUserFromDB, getUserByIdFromDB, getUsersFromDB } from "./user.service";
import User from "./user.model";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;

    const user = await createUserToDB(data);
    res.status(200).json({
        status: 'success',
        data: user
    })
}

export const getUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {    
    const user = await getUsersFromDB();
    res.status(200).json({
        status: 'success',
        data: user
    })
}

export const getUserById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const {id} = req.params;

    const user = await getUserByIdFromDB(id); 

    res.status(200).json({
        status: '200',
        data: user
    })
}


export const getAdminUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const {id} = req.params;

    const user = await getAdminUserFromDB(id); 

    res.status(200).json({
        status: '200',
        data: user
    })
}

