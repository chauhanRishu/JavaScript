//const tinderUser=new Object() // singleton and constructor
//console.log(tinderUser);

const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="rishu"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email: "rishu@gmail.com",
    fullname: {
        userfullname: {
            firstname: "rishu",
            lastname: "chauhan"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1: "a", 2: "b"}
const obj2={3: "a", 4: "b"}
const obj4={5: "a", 6: "b"}

// const obj3={obj1, obj2 }
// const obj3=Object.assign({}, obj1, obj2, obj4)

const obj3={...obj1, ...obj2, ...obj4} // spread operator
//console.log(obj3);

const users=[
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
]

//console.log(users[0].email)

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));