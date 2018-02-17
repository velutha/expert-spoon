const router = require("express").Router();

/* everything will go at /api/route */
//health check url
router.get("/health", (req, res) => {
  res.send("OK");
});


module.exports = router;
