import { Login, Logout } from "../controllers/auth.controller.js";

import express from "express";
import { getWards } from "../controllers/ward.controller.js";
import { refreshToken } from "../controllers/refresh-token.js";

const router = express.Router();

// router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

router.get('/wards', getWards);

// router.get('/wards', verifyToken, getWards);
// router.post('/ward', verifyToken, createWard);

export default router;