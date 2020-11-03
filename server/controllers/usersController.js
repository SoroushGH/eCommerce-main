const User = require("../models/usersModel.js");

/* get all users. /users/get_all_users   */
const get_all_users = async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users)
    }
    catch (error) {
        res.json({ ok: false, error });
    }
};


/* create a new user.  /users/create   */
const create = async (req, res) => {
    let { username } = req.body;
    try {
        const done = await User.create({ username });
        res.json(done);
    }
    catch (error) {
        res.json({ ok: false, error });
    }
};


/* delete a user.   /users/delete */
const deleteUser = async (req, res) => {
    let { username } = req.body;
    try {
        const remove = await User.deleteOne({ username });
        res.json(remove);
    }
    catch (error) {
        res.json({ ok: false, error });
    }
};


/* update user.  /users/update */
const update = async (req, res) => {
    let { username, newUsername } = req.body;
    try {
        const updated = await User.updateOne(
            { username }, { username: newUsername }
        )
        res.json(updated)
    }
    catch (error) {
        res.json({ ok: false, error });
    }
}






module.exports = { create, get_all_users, deleteUser, update };