var express = require('express');
var router = express.Router();
var indexCtrl = require("../controllers/todos");

/* GET home page. */
router.get('/', indexCtrl.index);
router.post('/', indexCtrl.create);
router.delete('/:id', indexCtrl.delete);

module.exports = router;
