const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const savedNewsItems = [];
router.use(bodyParser.json());

router.post("/savenews", (req, res) => {
  const { id } = req.body;
  savedNewsItems.push(id);
  res.json({ message: "News Id Saved" });
});

router.get("/displaynews", (req, res) => {
  res.json(savedNewsItems);
});

module.exports = router;
