var fs = require('fs');
var path = require('path');
'use strict';

module.exports.configRoutes = function (router) {
  router.get('/products/', function (req, res) {
    fs.readFile(path.resolve(__dirname, "./json/products.json"), (err, data) => {
      if (err) {
        throw err
      } else {
        res.status(200).json(Object.assign({ isMock: true }, { data }));
      }
    })
  });
}
