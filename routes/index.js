var express = require('express');
var router = express.Router();
const Session = require('../models/Session');

/* GET home page. */
router.get('/', Session.configSession, (req, res, next) => {  
  const session = req.session;
  const todos = session.todos;
  res.render('index', { title: 'Express', todos });
});




module.exports = router;
