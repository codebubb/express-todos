var express = require('express');
var router = express.Router();
const Session = require('../models/Session');

/* GET home page. */
router.get('/', Session.configSession, (req, res, next) => {  
  const { session } = req;
  const { todos } = session;
  res.render('index', { title: 'Express', todos });
});

router.post('/new-todo', Session.configSession, (req, res, next) => {
  const { session } = req;
  const { todos } = session;
  const { task } = req.body;

  if (task) {
    todos.push({ task, done: false });
  }
  res.redirect('/');
});



module.exports = router;
