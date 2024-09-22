import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";

const router = express.Router();
// database function routes linked to the controller

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;