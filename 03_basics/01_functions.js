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
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){ // ... is rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 3000));

const user={
    username: "rishu",
    price: 199
}

function handleObject(anyobject){
    console.log('Username is ${anyobject.username} and price is ${anyobject.price}');
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray=[200, 400, 500, 600]

function returnSecondValue(getArray){
     return getArray[1]  
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1, 2, 3]));
