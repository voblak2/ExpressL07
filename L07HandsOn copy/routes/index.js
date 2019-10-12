var express = require('express');
var router = express.Router();
var models = require("../models");
var passport = require("../services/passport");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
