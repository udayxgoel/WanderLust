const Listing = require("../models/listing.js");
const maptilerClient = require('@maptiler/client');
const mapAPI = process.env.MAP_API;
maptilerClient.config.apiKey = mapAPI;

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new");
};

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate({ path: "reviews", populate: { path: "author" } }).populate("owner");
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!")
        res.redirect("/listings");
    }
    res.render("listings/show", { listing });
};

module.exports.createListing = async (req, res) => {
    const result = await maptilerClient.geocoding.forward(req.body.listing.location, { limit: 1 });
    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = { url, filename };
    newListing.geometry = result.features[0].geometry;
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!")
        res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    res.render("listings/edit", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = { url, filename };
        await listing.save();
    }
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};

module.exports.filter = async (req, res) => {
    let { id } = req.params;
    let allListings = await Listing.find({ category: { $all: [id] } });
    if (allListings.length != 0) {
        res.locals.success = `Listings Find by ${id}`;
        res.render("listings/index.ejs", { allListings });
    } else {
        req.flash("error", "Listings is not here !!!");
        res.redirect("/listings");
    }
};

module.exports.search = async (req, res) => {
    const { country } = req.query;
    const allListings = await Listing.find({ country: { $regex: new RegExp(country, 'i') } });
    if (allListings.length!=0) {
        res.locals.success = `Listings Find by ${country}`;
        res.render("listings/index.ejs", { allListings });
    } else {
        req.flash("error", "Listings is not here !!!");
        res.redirect("/listings");
    }
}
