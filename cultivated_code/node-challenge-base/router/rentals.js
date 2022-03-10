const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
  });
});

router.post("/", (req, res) => {
  const name = req.body.name;
  const model = req.body.model;
  const start_date = req.body.start_date;
  const end_date = req.body.end_date;
  const d1 = new Date(start_date);
  const d2 = new Date(end_date);

  if (!name || !model) {
    return res.status(422).json({ error: "Name or Model must not be empty." });
  }
  if (d1.valueOf() - d2.valueOf() >= 0) {
    return res
      .status(422)
      .json({ error: "Start date must not be greater than the end date" });
  }

  return res.status(200).json(req.body);
});

module.exports = { path: "/api/v1/rentals", router };
