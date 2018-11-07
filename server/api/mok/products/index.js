var fs = require('fs');
let ResponseAPI = require('../common/index');
var path = require('path');
var formidable = require('formidable');
var util = require('util');
'use strict';
const responseAPI = new ResponseAPI();

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

      const imgAddress = 'api/mok/products/files';
      form.uploadDir = imgAddress;
      form.parse(req, function (err, fields, files) {
        var oldpath = files.file.path;
        const type = files.file.type.toString().split('/')[1];
        const imgId = new Date().getTime();
        var newpath = path.resolve(__dirname, 'files/' + imgId.toString() + '.' + type);
        const imagHost = 'http://' + req.headers.host + '/api/mok/imageById/' + imgId.toString() + '.' + type;
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          const fileData = {
            id: imgId,
            type: fields.fileType,
            title: fields.title,
            path: imagHost,
            imgType: type
          }
          storeImg(fileData, res);
        });
      })
    }
  });

  router.get('/imgLists/:id', function (req, res) {
    fileReadImgList((err, data) => {
      if (err) {
        responseAPI.sendingErrorMsg(res, err);
        return;
      }
      const list = JSON.parse(data) || [];
      let imageObj = null
      list.map((item) => {
        if (item.id.toString() === req.params['id'].toString()) {
          imageObj = item;
        }
      })
      responseAPI.sendingJSONData(res, {
        imageObj: imageObj
      })
    })
  })

  router.delete('/imgLists/:id', function (req, res) {
    fileReadImgList((err, data) => {
      if (err) {
        responseAPI.sendingErrorMsg(res, err);
        return;
      }
      const list = JSON.parse(data) || [];
      console.log('delete function called')
      let imageObj = null
      list.map((item) => {
        console.log(item.id + ' - ' + req.params['id']);
        if (item.id.toString() === req.params['id'].toString()) {
          this.imageObj = item;
          const reminingList = list.filter(itemData => itemData.id.toString() !== req.params['id'].toString());
          console.log('remining List', reminingList);
          fileWriteImgList(JSON.stringify(reminingList), (err) => {
            if (!err) deleteImgById(res, {
              id: item.id,
              type: item.imgType
            });
          });
        }
      })
      // if (!imageObj) {
      //   responseAPI.sendingErrorMsg(res, 'Not found', 404);
      // }
    })
  })

  router.get('/imgListsAll/', (req, res) => {
    console.log('img Called');
    fileReadImgList((err, data) => {
      if (err) {
        responseAPI.sendingErrorMsg(res, err);
        return;
      }
      const list = JSON.parse(data) || [];
      responseAPI.sendingJSONData(res, {
        imgList: list
      })
    })
  })

  router.get('/imageById/:id', (req, res) => {
    const imgPath = path.resolve(__dirname, 'files/' + req.params['id']);
    responseAPI.sendFile(res, imgPath)
  })

  router.get('/img/:id', function (req, res) {
    fileReadImgList((err, data) => {
      if (err) {
        responseAPI.sendingErrorMsg(res, err);
        return;
      }
      const list = JSON.parse(data) || [];
      let imageObj = null
      console.log(data);
      console.log(req.params['id'])
      list.map((item) => {
        console.log(item.id);
        if (item.id.toString() === req.params['id'].toString()) {
          console.log('found')
          imageObj = item;
        }
      })
      console.log('imgFound', imageObj)
      if (imageObj) {
        responseAPI.sendFile(res, imageObj.path);
      } else {
        responseAPI.sendingErrorMsg(res, 'Not found', 404);
      }

    })
  })
}

function storeImg(data, response) {
  fileReadImgList((err, imgList) => {
    if (err) return;
    const lists = JSON.parse(imgList) || [];
    lists.unshift(data);
    fileWriteImgList(JSON.stringify(lists), (errMsg, data) => {
      if (errMsg) return;
      response.status(200).json(Object.assign({
        isMock: true
      }, {
        message: 'picture added Successful',
        status: 'SUCCESS'
      }));
    })
  })
}

function deleteImgById(response, payLoad) {
  const imgPath = path.resolve(__dirname, 'files/' + payLoad.id + '.' + payLoad.type);
  console.log(imgPath);
  fs.unlink(imgPath, (errMsg) => {
    console.log(errMsg);
    if (errMsg) {
      responseAPI.sendingErrorMsg(response, 'DeleteFileError', 400);
    } else {
      responseAPI.sendingJSONData(response, 'Image Deleted');
    }
  })
}

function fileRead(next) {
  fs.readFile(path.resolve(__dirname, "./json/products.json"), next)
}

function fileWrite(data, next) {
  fs.writeFile(path.resolve(__dirname, "./json/products.json"), data, next)
};

function fileReadImgList(next) {
  fs.readFile(path.resolve(__dirname, "./json/imglist.json"), next)
}

function fileWriteImgList(data, next) {
  fs.writeFile(path.resolve(__dirname, "./json/imglist.json"), data, next)
};