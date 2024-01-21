const router = require('express').Router();
const userControlle = require('../controllers/user/user.controller');
const verifyToken = require('../middlewares/authentication.middleware');

router.get('/get-others',verifyToken,userControlle.getOthersController);


module.exports=router;