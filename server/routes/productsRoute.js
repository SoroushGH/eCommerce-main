const router = require('express').Router();
const controller = require('../controllers/productsController')


/* see all products */
router.get('/get_all_products', controller.get_all_products);

/* create a new product */
router.post('/create', controller.create);

/* delete a product */
router.post('/delete', controller.deleteProd);

/* update product */
router.post('/update', controller.update);

/* find one product by _id */
router.get('/:products_id', controller.find_by_id);

module.exports = router; 