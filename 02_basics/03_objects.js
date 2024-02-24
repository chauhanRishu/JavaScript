// singleton
// Object.create

// object literals

const mySym=Symbol("key1")

const JsUser={
    name: "rishu",
    "full name": "rishu chauhan",
    [mySym]: "myKey1",
    age: 18,
    location: "azamgarh",
    email: "rishu@gmail.com",
    isLoggedIn: false,
    lostLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email="rishu@google.com"
// Object.freeze(JsUser)
JsUser.email="rishu@chatgpt.com"
// console.log(JsUser);

JsUser.greeting=function( ) {
    console.log("hello JS user");    
}

JsUser.greetingTwo=function( ) {
    console.log('hello JS user, ${this.name}');    
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());