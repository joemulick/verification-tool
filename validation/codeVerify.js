const Validator = require('validator');
const isEmpty = require('./is-empty');


module.exports = function validateRegisterInput(data){
    let errors = {};

    data.code = !isEmpty(data.code) ? data.code : '';

    if(Validator.isEmpty(data.name)){
        errors.code = "Please Enter a Code";
    }

    if(!Validator.isLength(data.name, {min: 10, max:10}) ){
        errors.code = 'The code is 10 characters';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}