const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connect = require('./db/connect');
const routes = require('./Api');
const error404 = require('./middleware/error404');
const errorHandler = require('./middleware/errorHandler');
const passport = require('./middleware/passport');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
// const methodOverride = require('method-override');
// const initializePassport = require('./middleware/passportConfig');
const app = express();

const port = process.env.PORT || 3000;
// middleWares
app.use(
  cors({
    origin: 'http://localhost:3000',
    // credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRETE,
    // store: new MongoStore()
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);
app.use(cookieParser(process.env.SESSION_SECRETE));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// Global variables
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});
app.use('/api/v1', routes);

app.use(error404);
app.use(errorHandler);

const start = async (url) => {
  try {
    await connect(process.env.MONGO_URI);
    console.log(`mongodb is connected`);
    app.listen(port, () => {
      console.log(`app is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};
start();
