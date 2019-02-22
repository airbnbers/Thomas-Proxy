const express = require('express');
const app = express();
const proxy = require('http-proxy-middleware');

const port = process.env.PORT || 3000;

app.use('/rooms/:listingId/', express.static(__dirname + '/../public'));

app.use(
  '/rooms/1/images',
  proxy({
    target:'http://bearbnb-photo-module.us-east-2.elasticbeanstalk.com/',
    changeOrigin: true
  })
);

// app.use(
//   '/rooms/1',
//   proxy({
//     target:'http://127.0.0.1:3002',
//     changeOrigin: true
//   })
// );

// app.use(
//   '/rooms/bookings/1',
//   proxy({
//     target:'http://127.0.0.1:3002',
//     changeOrigin: true
//   })
// );

// app.use(
//   '/rooms/reviews/recent',
//   proxy({
//     target:'http://127.0.0.1:3003',
//     changeOrigin: true
//   })
// );
// app.use(
//   '/rooms/reviews/relevant',
//   proxy({
//     target:'http://127.0.0.1:3003',
//     changeOrigin: true
//   })
// );
// app.use(
//   '/rooms/reviews/filter',
//   proxy({
//     target:'http://127.0.0.1:3003',
//     changeOrigin: true
//   })
// );

app.listen(port);
console.log('Listening on port', port);