/**
 * UserReadDto ReadData Method Test
 * @class UserReadDto
 * @method ReadData
 */

const UserReadDto = require("@Dto/Users/UserReadDto");

let payload = {
  id: 25,
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
    id: 25,
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
];

test("Testing UserReadDto ReadData Function For Single Object", () => {
  expect(new UserReadDto(payload).ReadData()).toStrictEqual(expectedResult);
});

// test("Testing UserReadDto ReadData Function For Multple Object", () => {
//   expect(new UserReadDto(payload).ReadData()).toStrictEqual(expectedResult);
// });
