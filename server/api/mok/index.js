var express = require('express');
var router = express.Router();
'use strict';

require('./products/index').configRoutes(router);

