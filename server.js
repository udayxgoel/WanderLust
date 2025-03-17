require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/dbConfig.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("./config/sessionConfig.js");
const passport = require("./config/passportConfig.js");
const flash = require("connect-flash");
const ExpressError = require("./utils/ExpressError.js");
const errorHandler = require("./middlewares/errorHandler.js");
const listingRouter = require("./routes/listingRoute.js");
const bookingRouter = require("./routes/bookingRoute.js");
const userRouter = require("./routes/userRoute.js");

// App Config
const app = express();
const PORT = process.env.PORT || 4000;

// DB Connection
connectDB();

// Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);

// Session & Flash
app.use(session);
app.use(flash());

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Global Middleware for Flash Messages & User
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// Routes
app.get("/", (req, res) => res.redirect("/listings"));
app.use("/user", userRouter);
app.use("/listings", listingRouter);
app.use("/bookings", bookingRouter);

// Handle All
app.all("*", (req, res, next) =>
  next(new ExpressError(404, "Page not found!"))
);

// Error Handling Middleware
app.use(errorHandler);

// Start Server
app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
