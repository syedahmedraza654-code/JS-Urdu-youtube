const accountId = 144553
let accountEmail = "Ahmed@google.com"
var accountpassword = "12345"
accountcity = "Karachi"
let accountstate;

// accountId = 2 // not allowed

accountEmail = "Ah@Ah.com"
accountpassword = "21212121"
accountcity = "Islamabad"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountpassword, accountcity, accountstate])