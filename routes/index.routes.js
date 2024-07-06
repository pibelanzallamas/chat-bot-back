const router = require("express").Router();
const controller = require("../controllers/index.controllers.js")

router.post("/api/nlpcloud", controller.request);

module.exports = router;