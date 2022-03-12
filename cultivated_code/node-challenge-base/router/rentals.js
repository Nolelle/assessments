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

    //Name, Model Date Validation
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

    //Post to Database after Validation
    const postString = `
  INSERT INTO rentals (name, model, start_date, end_date)
  VALUES
  ($1,$2,$3,$4)`;

    const rentalValues = [name, model, start_date, end_date];
    const queryString = `SELECT * 
    FROM rentals 
    WHERE id=(SELECT max(id) FROM rentals)`;

    const newRental = await pool.query(postString, rentalValues);
    const logRental = await pool.query(queryString);

    res.status(200).json(logRental.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = { path: "/api/v1/rentals", router };
