const accountId = 144553
let accountEmail = "k@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" //possible to declear but don't use .
let accountState;


//accountId = 2 not allowed

accountEmail = "kimt@gmail.com"
accountPassword= "212121"
accountCity = "Bangalor"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

//prefer nbot to use var cause of issue in block scope and functional scope.