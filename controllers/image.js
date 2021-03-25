const request = require('request');


module.exports = {
	upload (req, res, body) {
		const endpoint = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
		req.headers['pinata_api_key'] = process.env.PINATA_API_KEY;
		req.headers['pinata_secret_api_key'] = process.env.PINATA_SECRET_API_KEY;

		req.pipe(request.post(endpoint, body)).pipe(res);
	},
};
