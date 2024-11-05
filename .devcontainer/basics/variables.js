const accountId = 123
let accountEmail = "a@b.co" //let is used mostly
var accountPassword = "12345" ///var is not used because it doesn't know the scope {} issue in block and function scope
accountCity = "Rewari"
let accountState;
// accountId = 2 not allowed
accountEmail = "b@a.co"
accountPassword = "Tests"
accountCity = "Gurgaon"
console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity])