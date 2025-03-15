require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listingModel.js");

main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("not connected to db");
    console.log(err);
  });

async function main() {
  await mongoose.connect(`${process.env.MONGODB_URL}`);
}

let categoryAll = [
  "Beachfront",
  "Cabins",
  "Omg",
  "Lake",
  "Design",
  "Amazing Pools",
  "Farms",
  "Amazing Views",
  "Rooms",
  "Lakefront",
  "Tiny Homes",
  "Countryside",
  "Treehouse",
  "Trending",
  "Tropical",
  "National Parks",
  "Casties",
  "Camping",
  "Top Of The World",
  "Luxe",
  "Iconic Cities",
  "Earth Homes",
];

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "67d3df3076dd4830a73a9b8f",
    price: obj.price * 25,
    category: [
      `${categoryAll[Math.floor(Math.random() * 22)]}`,
      `${categoryAll[Math.floor(Math.random() * 22)]}`,
    ],
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};
initDB();
