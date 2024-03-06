/*
let myName = "rishu    "
let myChannel = "chai"

console.log(myName.truelength);
*/

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.rishu = function(){
    console.log(`rishu is present in all objects`);
}

Array.prototype.heyRishu = function(){
    console.log(`Rishu says hello`);
}

// heroPower.rishu()
// myHeros.rishu()
// myHeros.heyRishu()
// heroPower.heyRishu()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);

}

anotherUsername.trueLength()

"rishu".trueLength()
"iceTea".trueLength()