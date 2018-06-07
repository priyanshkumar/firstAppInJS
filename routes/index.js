const express = require('express');
const indexController = require('../controller/indexController');

const router = express.Router();

/* GET home page. */
router.get('/', indexController.homePage);
router.get('/random', (req, res, next) => {
  const someNumber = Math.random();

  res.render('random', {
    title: 'Random',
    randomNumber: someNumber,
  });
});

module.exports = router;
