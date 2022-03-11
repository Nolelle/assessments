const router = require("express").Router();

router.get("/health", (req, res) => {
  res.json({
    success: true,
  });
});

router.post("/", async (req, res) => {
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

  const sql = `
  INSERT INTO rentals (name,model,start_date,end_date)
  VALUES
  ${name},${model},${start_date},${end_date}
  `;

  req.db.query(sql, (err, result) => {
    release();
    if (err) {
      return console.error("Error executing query", err.stack);
    }
    const data = result.rows;
    return res.status(200).json(data);
  });
});

module.exports = { path: "/api/v1/rentals", router };
