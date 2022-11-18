import { Login, Logout } from "../controllers/Auth.js";

import express from "express";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

// router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);



// router.get('/wards', verifyToken, getWards);
// router.post('/ward', verifyToken, createWard);

export default router;