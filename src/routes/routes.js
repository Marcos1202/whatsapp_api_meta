const express = require("express");
const router = express.Router();
const whasAppController = require("../controllers/whatsappControllers");

router
    .get("/", whasAppController.VerifyToken)
    .post("/", whasAppController.ReceivedMessage)

module.exports = router;