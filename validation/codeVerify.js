const Validator = require('validator');
const isEmpty = require('./is-empty');


module.exports = function validateCodeInput(data){
    let errors = {};

    data.code = !isEmpty(data.code) ? data.code : '';

    if(Validator.isEmpty(data.code)){
        errors.code = "Please enter a code";
    }

    if(!Validator.isLength(data.code, {min: 10, max:10}) ){
        errors.code = 'The code should be 10 characters';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}