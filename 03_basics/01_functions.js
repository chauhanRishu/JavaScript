function sayMyName(){
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("U");
}

// sayMyName()

/*
function addTwoNumbers(number1, number2){
    console.log(number1+number2);
}
*/

function addTwoNumbers(number1, number2){
    // let result=number1+number2
    // return result
    return number1+number2
}

const result=addTwoNumbers(3, 5)

// console.log("Result:", result);

function loginUserMessage(username="raj"){
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return '${username} just logged in'
}

// console.log(loginUserMessage("rishu"));
console.log(loginUserMessage(""));
console.log(loginUserMessage());