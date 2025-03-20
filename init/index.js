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

const allPerks = [
  "Wifi",
  "TV",
  "Free parking spot",
  "Radio",
  "Pets",
  "Private entrance",
];

const info =
  "Our property is designed to provide a cozy and hassle-free stay. Located in a prime area, it offers easy access to nearby attractions, restaurants, and public transport. The space is well-maintained, ensuring a clean and comfortable environment for guests. Whether you're here for a short visit or an extended stay, we strive to make your experience smooth and enjoyable. Feel free to reach out for any assistance during your stay.";

function getRandomPerks() {
  return Math.random() < 0.5 ? allPerks.slice(0, 4) : allPerks;
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "67d5466a980cba0bc596cc6f",
    price: obj.price * 25,
    category: categoryAll[Math.floor(Math.random() * 22)],
    perks: getRandomPerks(),
    extraInfo: info,
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};
initDB();
