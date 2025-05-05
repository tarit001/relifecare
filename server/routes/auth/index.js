const express = require('express');
const router = express.Router();

// router.use("/private", require("./private"))
router.use("/public", require("./public"))

module.exports = router;