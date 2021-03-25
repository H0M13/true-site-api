const imageController = require("../controllers/image");

module.exports = (app) => {
	app.post("/image/upload", imageController.upload);
};