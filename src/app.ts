import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';

const app: Application = express();

// Application routes
import userRoutes from './app/modules/user/user.route';

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/user', userRoutes);

export default app;
