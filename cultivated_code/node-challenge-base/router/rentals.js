const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
  });
});

router.post("/", (req, res, err) => {
  const name = req.body.name;
  const model = req.body.model;
  const start_date = req.body.start_date;
  const end_date = req.body.end_date;

  if (!name || !model) {
    return res.status(422).send("Name or Model must not be empty!");
  }

  return res.status(200).send("sucess");
});

module.exports = { path: "/api/v1/rentals", router };
