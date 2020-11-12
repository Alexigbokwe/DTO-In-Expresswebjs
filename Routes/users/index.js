"use strict";
const { Route, at } = require("@router");

/*
    |--------------------------------------------------------------------------
    | Users Route File   
    |--------------------------------------------------------------------------
*/
Route.get("/", at("UsersController.index"));
Route.post("/store", at("UsersController.store"));
Route.get("/:Id", at("UsersController.show"));
Route.put("/:Id", at("UsersController.update"));
Route.delete("/:Id", at("UsersController.destroy"));

module.exports = Route;
