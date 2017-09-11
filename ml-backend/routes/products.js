const express = require('express');
const router = express.Router();
const request = require('request-promise');

router.get('/', (req, res) => {
  const query = {
    q: req.query.q,
    limit: 100,
  };
  request({
    uri: 'https://api.mercadolibre.com/sites/MLA/search',
    qs: query,
    json: true,
  }).then((items) => {
    res.json(items.results);
  });
});

module.exports = router;
