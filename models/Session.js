const configSession = (req, res, next) => {
  const session = req.session;
  if (!session.todos) {
    session.todos = [];
  }
  next();
};

module.exports = { configSession };