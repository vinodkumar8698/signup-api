const mongoose = require("mongoose");

// Database Connection
const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Database connected successful`);
  })
  .catch((err) => console.log(err, "no connection"));

// Database Connection end
