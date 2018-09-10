var fs = require('fs');
var path = require('path');
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
}


function fileRead(next) {
  fs.readFile(path.resolve(__dirname, "./json/products.json"), next)
}

function fileWrite(data, next) {
  fs.writeFile(path.resolve(__dirname, "./json/products.json"), data, next)
}