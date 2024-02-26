const user={
    username: "rishu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
//  user.username="raaz"
// user.welcomeMessage()

// console.log(this);

/*
function chai(){
    let username="rishu"
    console.log(this.username);
}

chai()
*/

/*
 const chai=function(){
    let username= "rishu"
    console.log(this.username);
 }

 chai()
 */

 const chai = () => {  // arrow function
    let username= "rishu"
    console.log(this);
 }

 // chai()

 /*
 const addTwo=(num1, num2) =>{ // basic arrow function
    return num1 + num2
 }
*/

// const addTwo=(num1, num2) => num1 + num2
// const addTwo=(num1, num2) => (num1 + num2)  // implicit return
const addTwo=(num1, num2) => ({username: "rishu"}) // implicit return an object

 console.log(addTwo(3, 4));

 // const myArray=[2, 3, 4, 5, 7, 8]
 // myArray.forEach()