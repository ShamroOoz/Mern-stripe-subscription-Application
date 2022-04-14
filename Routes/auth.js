import express from "express";

const router = express.Router();

import { register, login, getMe } from "../Controllers/auth.js";
import { requireSignin } from "../Middlewares/ReqAuth.js";

router.post("/register", register);
router.post("/login", login);
router.get("/getUser", requireSignin, getMe);

export default router;
