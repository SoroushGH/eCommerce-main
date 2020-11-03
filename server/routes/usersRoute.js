const router = require('express').Router();
const controller = require('../controllers/usersController')

/* see all users */
router.get('/get_all_users', controller.get_all_users);

/* create a new user */
router.post('/create', controller.create);

/* delete a user */
router.post('/delete', controller.deleteUser);

/* update user */
router.post('/update', controller.update);




module.exports = router; 