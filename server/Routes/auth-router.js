const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controllers')
const validate = require('../middleware/validate-middleware')
const { registerSchema } = require('../validations/auth-validation')

router.route('/')
    .get(authControllers.home)

router.route('/register')
    .post( validate(registerSchema), authControllers.register )

router.route('/login')
    .post(authControllers.login)

module.exports = router;