var fs = require('fs');
var path = require('path');
var formidable = require('formidable');
var util = require('util');
'use strict';

module.exports.configRoutes = function (router) {
  router.get('/products/', function (req, res) {
    fs.readFile(path.resolve(__dirname, "./json/products.json"), (err, data) => {
      if (err) {
        throw err
      } else {
        const respData = JSON.parse(data);
        res.status(200).json(Object.assign({
          isMock: true
        }, {
            data: respData
          }, {
            status: 'SUCCESS'
          }));
      }
    })
  });

  router.get('/products/:id', function (req, res) {
    fs.readFile(path.resolve(__dirname, "./json/products.json"), (err, data) => {
      if (err) {
        throw err
      } else {
        const allData = JSON.parse(data);
        let respData = null;
        if (req.params['id']) {
          allData.map((p) => {
            if (p.id && p.id === req.params['id']) {
              respData = p;
            }
          });
        }
        res.status(200).json(Object.assign({
          isMock: true
        }, {
            data: respData
          }, {
            status: 'SUCCESS'
          }));
      }
    })
  })

  router.post('/products/', (req, res) => {
    fileRead((err, data) => {
      if (err) {
        throw err
      } else {
        console.log(req.body);
        const received = req.body;
        const products = JSON.parse(data) || [];
        console.log(products);

        let maxId = 0;
        products.map(element => {
          maxId > Number(element.id) ? maxId = maxId : maxId = Number(element.id);
        });

        received['id'] = (++maxId).toString();

        console.log('test', received);
        products.unshift(received);

        fileWrite(JSON.stringify(products), (err) => {
          if (err) throw err;
          res.status(200).json(Object.assign({
            isMock: true
          }, {
              message: maxId + ' Products added Successful',
              status: 'SUCCESS'
            }));
        })
      }
    })
  })

  router.post('/addFile/', (req, res) => {
    console.log(req.url);
    if (req.url == '/addFile') {
      console.log('inside the add file function')
      var form = new formidable.IncomingForm();
      form.uploadDir='api/mok/products/files';
      form.parse(req, function (err, fields, files) {
        // console.log('path', files.file.path);
        // var oldpath = files.file.path;
        var oldpath  = files.file.path;
        console.log('oldPath', oldpath);
        var newpath = path.resolve(__dirname, "./files/123.jpg")
        console.log('newPath', newpath);
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.status(200).json(Object.assign({
            isMock: true
          }, {
              message: ' File uploaded Successful',
              status: 'SUCCESS'
            }));
        });

      })
    }
  });
}

function fileRead(next) {
  fs.readFile(path.resolve(__dirname, "./json/products.json"), next)
}

function fileWrite(data, next) {
  fs.writeFile(path.resolve(__dirname, "./json/products.json"), data, next)
};
