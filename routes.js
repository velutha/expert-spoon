const router = require("express").Router();
const fileController = require("./controllers/file.controller");
const userController = require("./controllers/user.controller");
const logger = require('./config/logger');

/* everything will go at /api/route */
//health check url
router.get("/health", (req, res) => {
  res.send("OK");
});

router.post("/upload",fileController.uploadFile);

router.get("/question/:enterpriseId",fileController.getQuestions);

router.post("/answer",fileController.uploadAnswer);

router.post("/signup",userController.signup);

router.post("/login",userController.login);

router.get("/answer/:revieweeId",fileController.getAnswers);


module.exports = router;
