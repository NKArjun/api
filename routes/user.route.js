import express from "express";
import { deleteUser } from '../controller/user.controller.js';
import { verifyToken } from "../Middleware/jwt.js";

const router = express.Router();

router.delete('/:id', verifyToken, deleteUser);

export default router;