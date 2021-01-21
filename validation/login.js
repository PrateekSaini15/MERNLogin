const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = isEmpty(data.email) ? "" : data.email;
  data.password = isEmpty(data.passowrd) ? "" : data.passowrd;

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email feild is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is not valid";
  }

  if (Validator.isEmpty(data.passowrd)) {
    errors.passowrd = "Passoword is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
