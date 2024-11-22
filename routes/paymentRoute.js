// routes/paymentRoute.js

import express from "express";
import { createPayment } from "../controllers/sazzad/paymentController.js";

const router = express.Router();

// POST route to create a payment record
router.post("/payments", createPayment);

export default router;
