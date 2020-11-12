"use strict";

class User extends DB_MODEL {
  static get tableName() {
    return "users";
  }
}

module.exports = User;
