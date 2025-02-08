const express = require('express');
const router = express.Router();

router.route('/')
            .get( (req, res) => {
                res.status(200).send("Welcome to the world best Mern Series by Thapa")
            })

router.route('/register')
            .get((req, res) => {
                res.status(200).send("Welcome to Register page.")
            })

module.exports = router;