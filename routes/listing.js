const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const multer = require('multer');
const { storage } = require("../cloud/cloudConfig.js");
const upload = multer({ storage });

const listingController = require("../controllers/listing.js");

router.get("/search", wrapAsync(listingController.search));

router.get("/filter/:id", wrapAsync(listingController.filter));

router.route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn, upload.single("listing[image]"), wrapAsync(listingController.createListing));

//new route
router.get("/new", isLoggedIn, wrapAsync(listingController.renderNewForm));

//show route
router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn, isOwner, upload.single("listing[image]"), validateListing, wrapAsync(listingController.updateListing))
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

//edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;