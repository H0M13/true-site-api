# TrueSite API

### Simple Node Express API to provide an endpoint for accessing the Pinata API and pin data to IPFS.

Provide a env file with your Pinata keys and hitting the POST endpoint "/api/upload" will pipe the incoming request to the Pinata file upload endpoint, with your keys attached to the headers.
https://github.com/PinataCloud/Pinata-SDK#pinFileToIPFS-anchor 

```bash

npm install

```

```bash

npm start

```

The server runs on port 8009 by default