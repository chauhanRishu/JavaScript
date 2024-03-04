const user = {
    username: "rishu",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(userName, loginCount, isLoggedIn){ // constructor function
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.userName}`);
    }

    return this
}

const userOne =new User("raaz", 12, true)
const userTwo =new User("ram", 11, false)

console.log(userOne.constructor);
// console.log(userTwo);