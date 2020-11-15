const UserModel = require("@model/User_model");

class UsersRepo {
  async GetAllUsers() {
    return await new Promise((resolve) => {
      let allUsers = UserModel.query();
      resolve(allUsers);
    });
  }

  async CreateNewUser(data) {
    return await new Promise((resolve) => {
      let saveUser = UserModel.query().insert(data);
      resolve(saveUser);
    });
  }
  async GetUserById(Id) {
    return await new Promise((resolve) => {
      try {
        let user = UserModel.query().findById(Id);
        resolve(user);
      } catch (error) {
        console.log(error);
      }
    });
  }
  async UpdateUser(Id, Data) {
    return new Promise((resolve) => {
      let user = UserModel.query().patchAndFetchById(Id, Data);
      resolve(user);
    });
  }
  async DeleteUser(Id) {
    return await new Promise((resolve, reject) => {
      this.GetUserById(Id).then((result) => {
        if (result == null) {
          reject("User not found");
        } else {
          UserModel.query().deleteById(Id);
          resolve("User Deleted");
        }
      });
    });
  }
}

module.exports = UsersRepo;
