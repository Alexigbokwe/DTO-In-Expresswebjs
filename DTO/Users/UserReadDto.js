const ContextMapper = require("../ContextMapper");
const TransferObject = Symbol("TransferObject");

class UserReadDto extends ContextMapper {
  constructor(payload) {
    super();
    this.payload = payload;
  }

  [TransferObject]() {
    return {
      id: null,
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
    return super.MapRecord(this[TransferObject](), this.payload);
  }
}

module.exports = UserReadDto;
