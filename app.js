const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require('dotenv');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
dotenv.config();

const port = process.env.PORT || "8002";

app.use(cors());
app.use(logger("dev"));

app.use(express.static(__dirname + "/static/"));
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname + "/static/", 'index.html')));

require("./routes")(app);

const privateKey = fs.readFileSync('/etc/letsencrypt/live/truesite.link/privkey.pem', 'utf8'),
	certificate = fs.readFileSync('/etc/letsencrypt/live/truesite.link/cert.pem', 'utf8'),
	ca = fs.readFileSync('/etc/letsencrypt/live/truesite.link/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

const https_server = https.createServer(credentials, app);

https_server.listen(port, () => {
	console.log(`Listening to requests on ${port}`);
});


