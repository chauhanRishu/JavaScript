// if

// const isUserloggedIn = true
const temperature = 41

/*
if (temperature === 40 ){
    console.log("radhe radhe");
} else {
    console.log("ram ram");
}

console.log("execute");
*/
// <, >, <=, >=, ==, !=, ===, !==

/*
const score = 200

if (score>100){
    const power = "fly"
    console.log('User power: ${power}');
}

console.log('User power: ${power}');
*/

const balance = 1000

// if (balance > 500) console.log("tes"),console.log("test2");

/*
if(balance < 500){
    console.log("less than 500");
} else if(balance < 750){
    console.log("less than 750");
} else if (balance < 900){
    console.log("less than 900");
} else {
    console.log("less than 1200");
}
*/

const isUserloggedIn = true
const debitCard = true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if( isUserloggedIn && debitCard && 2==2){
    console.log("allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}