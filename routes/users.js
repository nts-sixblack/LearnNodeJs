var express = require('express');
var router = express.Router();
var userController = require("../controller/UserController");

/* GET users listing. */
router.get('/', userController.index);

router.get("/abc", userController.abc);

module.exports = router;
