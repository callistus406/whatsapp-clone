function checkAuthenticated(req, res, next) {
  //   console.log(req.isAuthenticated());
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/login');
}

module.exports = checkAuthenticated;
