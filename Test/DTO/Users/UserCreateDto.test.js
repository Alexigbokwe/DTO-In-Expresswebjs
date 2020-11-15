/**
 * UserCreateDto ReadData Method Test
 * @class UserCreateDto
 * @method ReadData
 */

const UserCreateDto = require("@Dto/Users/UserCreateDto");

let payload = {
  name: "Alex Man",
  email: "man@yahoo.com",
  email_verified_at: null,
  password: "1234567890",
  remember_token: null,
  admin: "No",
  account_status: "Inactive",
  verified_status: "yes",
  available_for: "Okay",
};

let expectedResult = [
  {
    success: true,
    message: "Validation passed",
    data: {
      name: "Alex Man",
      email: "man@yahoo.com",
      email_verified_at: null,
      password: "1234567890",
      remember_token: null,
      admin: "No",
      account_status: "Inactive",
      verified_status: "yes",
      available_for: "Okay",
    },
  },
];

test("Testing UserCreateDto ReadData Function", () => {
  expect(new UserCreateDto(payload).ReadData()).toStrictEqual(expectedResult);
});

