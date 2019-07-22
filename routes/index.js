var express = require('express');
var router = express.Router();
const Session = require('../models/Session');
const uuidv4 = require('uuid/v4');

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
    const id = uuidv4();
    todos.push({ id, task, done: false });
  }
  res.redirect('/');
});

router.post('/update-todo', (req, res, next) => {
  const { session } = req;
  const { todos } = session;
  const { id, done } = req.body;
  const foundTodo = todos.find(todo => todo.id === id);
  if (foundTodo) {
    foundTodo.done = !!done;
  }
  res.redirect('/');
});

router.post('/delete-todo', (req, res, next) => {
  const { session } = req;
  let { todos } = session;
  const { id } = req.body;
  const foundTodo = todos.findIndex(todo => todo.id === id);
  if (foundTodo > -1) {
    todos.splice(foundTodo, 1);
  }
  res.redirect('/');
});



module.exports = router;
