
const Category = require("../models/categoriesModel.js");


/* get all categories. /categories/get_all_categories   */
const get_all_categories = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.send(categories)
    }
    catch (error) {
        res.json({ ok: false, error });
    }
};


/* create a new category.  /categories/create   */
const create = async (req, res) => {
    let { category, category_id } = req.body;
    try {
        const done = await Category.create({ category, category_id });
        res.json(done);
    }
    catch (error) {
        res.json({ ok: false, error });
    }
};


/* delete a category.   /categories/delete */
const deleteCat = async (req, res) => {
    let { category } = req.body;
    try {
        const remove = await Category.deleteOne({ category });
        res.json(remove);
    }
    catch (error) {
        res.json({ ok: false, error });
    }
};


/* update category.  /categories/update */
const update = async (req, res) => {
    let { category, newCategory } = req.body;
    try {
        const updated = await Category.updateOne(
            { category }, { category: newCategory }
        )
        res.json(updated)
    }
    catch (error) {
        res.json({ ok: false, error });
    }
}





module.exports = { create, get_all_categories, deleteCat, update };