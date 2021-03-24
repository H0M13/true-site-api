const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const port = process.env.PORT || "8000";

app.use(cors({ credentials: true, origin: true }));
app.use(logger("dev"));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

require("./routes")(app);

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
