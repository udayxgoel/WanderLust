const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

main().then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log("not connected to db");
    console.log(err);
})

async function main() {
  await mongoose.connect('mongodb+srv://udaygoel295:gMxN3223jSdbWIoI@cluster0.eaddc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
};

const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "66d9b7fbf6cb9bddd9c1b95e", category: "trending" }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();