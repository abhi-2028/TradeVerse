const express = require("express");
const dashboardController = require('../Controllers/Dashboard.controller');
const authMiddleware = require("../middlewares/Auth.middleware");
const router = express.Router();

router.get("/holdings",authMiddleware, dashboardController.allHoldings);

router.get("/positions", authMiddleware, dashboardController.allPositions);

router.get("/orders", authMiddleware, dashboardController.allOrders);

router.post("/new-order",authMiddleware,dashboardController.newOrder)

module.exports = router;