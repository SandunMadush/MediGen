import { Login, Logout } from "../controllers/auth.controller.js";
import {
  createWard,
  deleteWard,
  getWard,
  getWards,
  updateWard,
} from "../controllers/ward.controller.js";

import express from "express";
import { refreshToken } from "../controllers/refresh-token.js";
import {
  createEndoscopy,
  deleteEndoscopy,
  getEndoscopy,
  getEndoscopys,
  updateEndoscopy,
} from "../controllers/endoscopy.controller.js";
import {
  createTheatre,
  deleteTheatre,
  getTheatre,
  getTheatres,
  updateTheatre,
} from "../controllers/theatre.controller.js";
import {
  createClinic,
  deleteClinic,
  getClinic,
  getClinics,
  updateClinic,
} from "../controllers/clinic.controller.js";
import { getDashboardData } from "../controllers/dashboard.controller.js";
const router = express.Router();

// router.post('/users', Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

router.get("/wards", getWards);
router.get("/dashboard", getDashboardData);
router.get("/wards/:id", getWard);
router.get("/endoscopy", getEndoscopys);
router.get("/endoscopy/:id", getEndoscopy);
router.get("/theatre", getTheatres);
router.get("/theatre/:id", getTheatre);
router.get("/clinics", getClinics);
router.get("/clinics/:id", getClinic);
router.post("/wards", createWard);
router.put("/wards/:id", updateWard);
router.delete("/wards/:id", deleteWard);
router.post("/endoscopy", createEndoscopy);
router.put("/endoscopy/:id", updateEndoscopy);
router.delete("/endoscopy/:id", deleteEndoscopy);
router.post("/theatre", createTheatre);
router.put("/theatre/:id", updateTheatre);
router.delete("/theatre/:id", deleteTheatre);
router.post("/clinics", createClinic);
router.put("/clinics/:id", updateClinic);
router.delete("/clinics/:id", deleteClinic);

// router.get('/wards', verifyToken, getWards);
// router.post('/ward', verifyToken, createWard);

export default router;
