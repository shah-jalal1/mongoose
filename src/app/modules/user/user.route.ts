import Express from "express";
import { createUser, getUserById, getUsers } from "./user.controlller";

const router = Express.Router();

 router.get('/', getUsers);
 router.post('/create-user', createUser);
 router.get('/:id', getUserById);

 export default router;