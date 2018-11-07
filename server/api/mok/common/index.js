class ResponseAPI {
  sendingErrorMsg(response, err, statusCode = 400) {
    response.status(statusCode).json(Object.assign({
      isMock: true
    }, {
      message: err,
      status: 'ERROR'
    }));
  }

  sendingJSONData(response, data) {
    response.status(200).json(Object.assign({
      isMock: true
    }, {
      data: data,
      status: 'SUCCESS'
    }));
  }

  sendFile(response, path) {
    response.status(200).sendFile(path);
  }
}

module.exports = ResponseAPI;
