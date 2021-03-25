const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const port = process.env.PORT || "8000";

app.use(cors({ credentials: true, origin: true }));
app.use(logger("dev"));

require("./routes")(app);

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
