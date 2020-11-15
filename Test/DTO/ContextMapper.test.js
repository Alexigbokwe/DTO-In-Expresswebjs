const ContentMapper = require("@Dto/ContextMapper");

let TransferObject = {
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

let payload = {
  id: 2,
  name: "Alex Igbokwe",
  email: "alexxis2@yahoo.com",
  email_verified_at: null,
  password: "1234567890",
  remember_token: null,
  admin: "No",
  account_status: "Inactive",
  verified_status: "yes",
  available_for: "Okay",
};

test("Context mapper MapRecord function", () => {
  expect(new ContentMapper().MapRecord(TransferObject, payload)).toStrictEqual([
    {
      id: 2,
      name: "Alex Igbokwe",
      email: "alexxis2@yahoo.com",
      email_verified_at: null,
      password: "1234567890",
      remember_token: null,
      admin: "No",
      account_status: "Inactive",
      verified_status: "yes",
      available_for: "Okay",
    },
  ]);
});
