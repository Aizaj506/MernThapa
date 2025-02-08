const express = require('express');
const router = express.Router();
const {home, register} = require('../controllers/auth-controllers')

router.route('/')
    .get(home)

router.route('/register')
    .get(register)

module.exports = router;