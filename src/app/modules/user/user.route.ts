import Express from "express";
import { createUser, getAdminUsers, getUserById, getUsers } from "./user.controlller";

const router = Express.Router();

 router.get('/', getUsers);
 router.post('/create-user', createUser);
 router.get('/admins', getAdminUsers);
 router.get('/:id', getUserById);

 export default router;