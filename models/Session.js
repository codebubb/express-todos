const configSession = (req, res, next) => {
  const session = req.session;
  if (!session.todos) {
    session.todos = [{
      task: 'Clean the house',
      done: false,
    }];
  }
  next();
};

module.exports = { configSession };