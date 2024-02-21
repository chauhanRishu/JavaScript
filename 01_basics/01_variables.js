const accountId=144553
let accountEmail="rishu@gmail.com"
var accountPassword="12345"
accountCity="Azamgarh"
let accountState;

// accountId=2 // not allowed

accountEmail="raaz@gmail.com"
accountPassword="21212"
accountCity="Noida"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and function scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])