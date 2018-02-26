const router = require("express").Router();
const fileController = require("./controllers/file.controller");
const logger = require('./config/logger');

/* everything will go at /api/route */
//health check url
router.get("/health", (req, res) => {
  res.send("OK");
});

router.post("/upload",fileController.uploadFile);

router.get("/question/:enterpriseId",fileController.getQuestions);

router.post("/answer",fileController.uploadAnswer);


module.exports = router;
