const mongoose = require("mongoose");

module.exports.connectDB = async () => {
  await mongoose
    .connect(`${process.env.MONGODB_URL}`)
    .then(() => console.log("DB Connected"));
};
