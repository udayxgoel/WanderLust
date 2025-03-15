const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middlewares/middleware.js");

const userController = require("../controllers/userController.js");

//signup route
router
  .route("/signup")
  .get(userController.renderSignupForm)
  .post(wrapAsync(userController.signup));

//login route
router
  .route("/login")
  .get(userController.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/user/login",
      failureFlash: true,
    }),
    wrapAsync(userController.login)
  );

//profile route
router.route("/profile").get(userController.profile);

//logout route
router.get("/logout", userController.logout);

module.exports = router;
