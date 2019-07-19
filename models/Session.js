const configSession = (req, res, next) => {
  const session = req.session;
  if (!session.todos) {
    session.todos = [
      { task: 'Clean the house', done: false },
      { task: 'Something', done: true },
    ];
  }
  next();
};

module.exports = { configSession };