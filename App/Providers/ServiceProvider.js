const addService = require("@addService");
const pathTo = process.env.PWD;
class ServiceProvider {
  /**
   * Register application services.
   */
  boot() {
    return {
      UsersRepo: addService.asClass(
        require(pathTo + "/App/Repository/Users/UsersRepo")
      ),
    };
  }
}

module.exports = new ServiceProvider();
