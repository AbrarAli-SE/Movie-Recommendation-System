// middlewares/authMiddleware.js
exports.isAuthenticated = (req, res, next) => {
  if (req.session.userId) return next();
  res.status(401).json({ error: 'Unauthorized' });
};

