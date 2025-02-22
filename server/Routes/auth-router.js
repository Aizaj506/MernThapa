const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controllers')
const validate = require('../middleware/validate-middleware')
const { registerSchema, loginSchema } = require('../validations/auth-validation');
const authMiddleware = require('../middleware/auth-middleware');

router.route('/')
    .get(authControllers.home)

router.route('/register')
    .post( validate(registerSchema), authControllers.register )

router.route('/login')
    .post( validate(loginSchema), authControllers.login)

router.route('/userData')
    .get(authMiddleware,authControllers.userData)

module.exports = router;