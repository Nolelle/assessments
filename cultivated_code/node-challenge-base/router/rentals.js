const router = require("express").Router();
const { pool } = require("../services/setup/createDbConnection");

router.get("/health", (req, res) => {
  res.json({
    success: true,
  });
});

router.post("/", async (req, res) => {
  try {
    const { name, model, start_date, end_date } = req.body;
    const d1 = new Date(start_date);
    const d2 = new Date(end_date);

    if (!name || !model) {
      return res
        .status(422)
        .json({ error: "Name or Model must not be empty." });
    }
    if (d1.valueOf() - d2.valueOf() >= 0) {
      return res
        .status(422)
        .json({ error: "Start date must not be greater than the end date" });
    }
    // return res.status(200).json(req.body);
    const queryString = `
  INSERT INTO rentals (name, model, start_date, end_date)
  VALUES
  ($1,$2,$3,$4)`;
    const values = [name, model, start_date, end_date];

    const newRental = await pool.query(queryString, values);
    res.status(200).json(newRental);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = { path: "/api/v1/rentals", router };
