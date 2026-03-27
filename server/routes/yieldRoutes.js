import express from "express";
import { getYieldPrediction } from "../controllers/yieldController.js";
const router = express.Router();

router.post("/predict", getYieldPrediction);
export default router;
