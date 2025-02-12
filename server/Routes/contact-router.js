const express = require('express');
const router = express.Router();
const contactForm = require("../controllers/contact-controller")
const validate = require('../middleware/validate-middleware')
const contactSchema = require('../validations/contact-validation');

router.route('/contact')
    .get(validate(contactSchema), contactForm)


module.exports = router;