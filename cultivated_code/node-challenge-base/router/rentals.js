const router = require('express').Router();

router.get('/health', (req, res) => {
  res.json({ success: true });
})

module.exports = { path: '/rentals', router };
