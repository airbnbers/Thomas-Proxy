const express = require('express');
const app = express();
const cors = require('cors');

let port = 3000;

app.use('/rooms/:listingId/', express.static(__dirname + '/../client/dist'));

app.listen(port);
console.log('Listening on port', port);