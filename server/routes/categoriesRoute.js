const router = require('express').Router();
const controller = require('../controllers/categoriesController')


/* see all categories */
router.get('/get_all_categories', controller.get_all_categories);

/* create a new category */
router.post('/create', controller.create);

/* delete a category */
router.post('/delete', controller.deleteCat);

/* update category */
router.post('/update', controller.update);



module.exports = router; 