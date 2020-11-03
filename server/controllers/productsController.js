
const Product = require("../models/productsModel.js");


/* get all categories. /products/get_all_products   */
const get_all_products = async (req, res) => {
    try {
        const products = await Product.find({});
        res.send(products)
    }
    catch (error) {
        res.json({ ok: false, error });
    }
};


/* create a new product.  /products/create   */
const create = async (req, res) => {
    let { product, price, category, img } = req.body;
    try {
        const done = await Product.create({ product, price, category, img });
        res.json(done);
    }
    catch (error) {
        res.json({ ok: false, error });
    }
};


/* delete a product.   /products/delete */
const deleteProd = async (req, res) => {
    let { product } = req.body;
    try {
        const remove = await Product.deleteOne({ product });
        res.json(remove);
    }
    catch (error) {
        res.json({ ok: false, error });
    }
};


/* update product.  /products/update */
const update = async (req, res) => {
    let { product, newProduct } = req.body;
    try {
        const updated = await Product.updateOne(
            { product }, { product: newProduct }
        )
        res.json(updated)
    }
    catch (error) {
        res.json({ ok: false, error });
    }
}

/* find one product by _id.    /products/:products_id   */
const find_by_id = async (req, res) => {
    let { products_id } = req.params;
    console.log(products_id)
    try {
        const product = await Product.findOne({ _id: products_id });
        res.send(product);
    }
    catch (error) {
        res.json({ ok: false, error });
    }
}

module.exports = { create, get_all_products, deleteProd, update, find_by_id };