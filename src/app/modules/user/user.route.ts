import Express from "express";
import { createUser } from "./user.controlller";

const router = Express.Router();

 router.get('/', createUser);

 export default router;