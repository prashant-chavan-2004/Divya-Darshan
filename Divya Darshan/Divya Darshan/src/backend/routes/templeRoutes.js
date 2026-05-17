const express = require("express");
const router = express.Router();
const Temple = require("../models/Temple");

router.get("/:districtName", async (req, res) => {
  const data = await Temple.find({
    districtName: req.params.districtName,
  });

  res.json(data);
});

module.exports = router;