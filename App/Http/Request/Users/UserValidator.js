const validator = require("../helper/validator");

class UserValidator {
  constructor(record) {
    let result = null;
    validator(record, this.ValidationRules(), {}, (err, status) => {
      if (!status) {
        result = {
          success: false,
          message: "Validation failed",
          data: err,
        };
      } else {
        result = {
          success: true,
          message: "Validation passed",
          data: null,
        };
      }
    });
    return result;
  }

  ValidationRules() {
    return {
      name: "required|max:225",
      email: "required|email",
      password: "required|min:5",
      admin: "required",
      account_status: "required",
    };
  }
}

module.exports = UserValidator;
