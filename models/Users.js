const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    FirstName: String,
    LastName: String,
    Age: String,
    Email: String
}, {
    timestamps: true
})


module.exports = mongoose.model('users', UserSchema)