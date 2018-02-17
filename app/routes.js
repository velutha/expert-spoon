const router = require("express").Router();
const fileController = require("./controllers/file.controller");

/* everything will go at /api/route */
//health check url
router.get("/health", (req, res) => {
  res.send("OK");
});

router.post("/upload",fileController.uploadFile);


module.exports = router;
