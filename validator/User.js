const validator = require('validator');
const EmptyData = require('./EmptyData')

module.exports = function UserValidator(data) {

    let errors = {};

    data.FirstName = !EmptyData(data.FirstName) ? data.FirstName : '';
    data.LastName = !EmptyData(data.LastName) ? data.LastName : '';
    data.Age = !EmptyData(data.Age) ? data.Age : '';
    data.Email = !EmptyData(data.Email) ? data.Email : '';


    if (validator.isEmpty(data.FirstName)) {
        errors.FirstName = 'FirstName required'
    }

    if (validator.isEmpty(data.LastName)) {
        errors.LastName = 'LastName required'
    }

    if (validator.isEmpty(data.Age)) {
        errors.Age = 'Age required'
    }
    if (!validator.isEmail(data.Email)) {
        errors.Email = 'Field is not an email type'
    }
    if (validator.isEmpty(data.Email)) {
        errors.Email = 'Email required'
    }




    return {
        errors,
        isValid: EmptyData(errors)
    }
}