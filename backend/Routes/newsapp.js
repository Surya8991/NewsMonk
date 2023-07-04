const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

let savedNewsItems = [];
router.use(bodyParser.json());


router.get("/clearnews", (req, res) => {
  savedNewsItems.splice(0,savedNewsItems.length)
  res.json({ message: "News Items Cleared", savedNewsItems: savedNewsItems });
});


router.post("/savenews", (req, res) => {
  const { id } = req.body;
  savedNewsItems.push(id);
  res.json({ message: "News Id Saved" });
});

router.get("/displaynews", (req, res) => {
  res.json(savedNewsItems);
});

module.exports = router;
