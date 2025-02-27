const express = require('express');
const adminControllers = require('../controllers/admin-controllers');
const authMiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require('../middleware/admin-middleware');
const router = express.Router();

router.route('/users')
    .get(authMiddleware,adminMiddleware,adminControllers.getAllUsers);

router.route('/contacts')
    .get(authMiddleware,adminMiddleware,adminControllers.getAllContacts);

router.route('/users/delete/:id')
    .delete(authMiddleware, adminMiddleware, adminControllers.deleteUserById)

router.route('/users/:id')
    .get(authMiddleware, adminMiddleware, adminControllers.getUserById)

router.route('/users/update/:id')
    .patch(authMiddleware, adminMiddleware, adminControllers.updateUserById)
    

module.exports = router;
