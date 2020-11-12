"use strict";
const __repository = use("UsersRepo");
const UserCreateDto = require("@Dto/Users/UserCreateDto");
const UserReadDto = require("@Dto/Users/UserReadDto");
const UserUpdateDto = require("@Dto/Users/UserUpdateDto");

class UsersController {
  /**
   * Display a listing of the resource.
   * @endPoint "api/user"
   * @verb "GET"
   * @return Response
   */
  async index(req, res, next) {
    try {
      return await __repository
        .GetAllUsers()
        .then((result) => {
          let responseData = new UserReadDto(result).ReadData();
          res.status(200).json({ payload: responseData });
        })
        .catch(() => {
          res.status(404).json({ payload: "No Content Found" });
        });
    } catch (error) {
      return next(error);
    }
  }

  /**
   * Store a newly created resource in storage.
   * @endPoint "api/user/store"
   * @verb "POST'
   * @param  Request  request
   * @return Response
   */
  async store(req, res, next) {
    try {
      let data = new UserCreateDto(req.body).ReadData();
      let status = data.find((item) => item.success == true);
      if (status !== null) {
        return await __repository
          .CreateNewUser(status.data)
          .then((result) => {
            let responseData = new UserReadDto(result).ReadData();
            res.status(201).json({ payload: responseData });
          })
          .catch((err) => {
            res.status(401).json({ payload: err });
          });
      } else {
        return res.status(400).json(data);
      }
    } catch (error) {
      return next(error);
    }
  }

  /**
   * Display the specified resource.
   * @endPoint "api/user/{Id}"
   * @verb "GET'
   * @param  int  id
   * @return Response
   */
  async show(req, res, next) {
    try {
      return __repository
        .GetUserById(req.params.Id)
        .then((result) => {
          let responseData = new UserReadDto(result).ReadData();
          res.status(200).json({ payload: responseData });
        })
        .catch(() => {
          res.status(404).json({ payload: "No Record Found" });
        });
    } catch (error) {
      return next(error);
    }
  }

  /**
   * Update the specified resource in storage.
   * @endPoint "api/user/{Id}"
   * @verb "PUT"
   * @param  int  id
   * @return Response
   */
  async update(req, res, next) {
    try {
      return await __repository
        .GetUserById(req.params.Id)
        .then((modelFromRepo) => {
          let data = new UserUpdateDto(modelFromRepo, req.body).ReadData();
          let status = data.find((item) => item.success == true);
          if (status !== null) {
            __repository
              .UpdateUser(req.params.Id, status.data)
              .then((result) => {
                let responseData = new UserReadDto(result).ReadData();
                res.status(201).json({ payload: responseData });
              })
              .catch((err) => {
                res.status(401).json({ payload: err });
              });
          } else {
            return res.status(400).json(data);
          }
        })
        .catch((err) => {
          return res.status(404).json({ payload: "No Record Found" });
        });
    } catch (error) {
      return next(error);
    }
  }

  /**
   * Remove the specified resource from storage.
   * @endPoint "api/user/{Id}"
   * @verb "DELETE"
   * @param  int  id
   * @return Response
   */
  async destroy(req, res, next) {
    try {
      return await __repository
        .DeleteUser(req.params.Id)
        .then((result) => {
          res.status(204).json({ payload: result });
        })
        .catch((err) => {
          res.status(404).json({ payload: result });
        });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new UsersController();
