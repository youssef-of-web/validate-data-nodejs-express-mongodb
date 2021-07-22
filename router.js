const express = require("express");
const Router = express.Router();
const Users = require('./models/Users')

const UserValidator = require('./validator/User')

Router.post('/users', async (req, res) => {
    const { errors, isValid } = UserValidator(req.body)

    if (!isValid) {
        return res.status(404).json(errors)
    }

    const Result = await Users.create(req.body);

    res.status(201).json(Result)

})



module.exports = Router;