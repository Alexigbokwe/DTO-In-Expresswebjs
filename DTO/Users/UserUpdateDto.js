const UserValidator = require("@RequestValidator/Users/UserValidator");
const ValidateData = Symbol("ValidateData");
const TransferObject = Symbol("TransferObject");
const ContextMapper = require("../ContextMapper");
class UserUpdateDto extends ContextMapper {
  /**
   * User Update Data Transfer Object Map
   * @param {*} modelFromRepo  From Database
   * @param {*} payload  From Request body
   */
  constructor(modelFromRepo, payload) {
    super();
    this.modelFromRepo = modelFromRepo;
    this.payload = payload;
  }

  [TransferObject]() {
    return {
      name: null,
      email: null,
      email_verified_at: null,
      password: null,
      remember_token: null,
      admin: "No",
      account_status: "Inactive",
      verified_status: null,
      available_for: null,
    };
  }

  ReadData() {
    let context = this[TransferObject]();
    let mappedContext = super.MapRecord(context, this.payload);
    let mappedObject = super.MapRecord(this.modelFromRepo, mappedContext);
    return this[ValidateData](mappedObject);
  }

  [ValidateData](mappedObject) {
    let validatedData = [];
    mappedObject.forEach((element) => {
      let validate = super.ValidateRecord(new UserValidator(element), element);
      validatedData.push(validate);
    });
    return validatedData;
  }
}

module.exports = UserUpdateDto;
