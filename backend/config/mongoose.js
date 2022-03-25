import mongoose from "mongoose";
mongoose.connect(
  "mongodb://localhost/talkingmart",
  { useNewUrlParser: true, useUnifiedTopology: true }
); const db = mongoose.connection;
db.on("error", console.error.bind(console, "Error on connecting databse"));
db.once("open", function () {
  console.log("We are connected");
});
export default db;