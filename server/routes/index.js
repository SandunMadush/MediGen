import express from "express";
import {Login} from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { getUsers } from "../controllers/Users.js";
 
const router = express.Router();
 
router.get('/users', verifyToken, getUsers);
// router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
//router.delete('/logout', Logout);
 
export default router;