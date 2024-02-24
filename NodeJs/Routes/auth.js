const express = require('express');
const router = express.Router();
const{loginController, singupController, getUserController} = require('../controllers/authController')
const middleware = require('../middlewares/log');

router.post('/login', middleware, loginController);
router.post('/signup',middleware, singupController);

// params request
// router.get('/user/:id', middleware, getUserController);
// http://localhost:2456/api/auth/user/124

router.get('/user', middleware, getUserController);


module.exports = router;