import express from "express";
import { logout, register } from "../controller/auth.controller.js";
import { login } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);


export default router;