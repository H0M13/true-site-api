const imageController = require("../controllers/image");

module.exports = (app) => {
	app.post("/api/upload", imageController.upload);
};