import { Login, Logout } from "../controllers/auth.controller.js";
import { createWard, deleteWard, getWard, getWards, updateWard } from "../controllers/ward.controller.js";

import express from "express";
import { refreshToken } from "../controllers/refresh-token.js";
import { createEndoscopy, deleteEndoscopy, updateEndoscopy } from "../controllers/endoscopy.controller.js";

const router = express.Router();

// router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

router.get('/wards', getWards);
router.get('/wards/:id', getWard);
router.post('/wards', createWard);
router.put('/wards/:id', updateWard);
router.delete('/wards/:id', deleteWard);
router.post('/endoscopy', createEndoscopy);
router.put('/endoscopy/:id', updateEndoscopy);
router.delete('/endoscopy/:id', deleteEndoscopy);

// router.get('/wards', verifyToken, getWards);
// router.post('/ward', verifyToken, createWard);

export default router;