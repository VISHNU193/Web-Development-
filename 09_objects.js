//singleton
// Object.create()

//literal not singleton ,, constructor => singleton
//keys are processed aas strings

const mySym = Symbol("key1")
const mySym2 = Symbol("key2")

const user ={
    names: "vishnu",
    age : 19,
    [mySym]:mySym,//interview add symbol to an object ***
    "fullName":"VKK",
    email:"voshnu25@gmail.com",
    location:"bangalore",
    isLoggedIn:false,
    lastLogInDays:["monday","tuesday"]
}

// console.log(user.email);
// console.log(user["email"]);
// console.log(user.fullName);
// console.log(typeof user[mySym]);


// Object.freeze(user)//cannot modify further
// user.email="jsadk@mail.com"
// console.log(user.email);

user.greeting = function(){
    console.log(`hello js user`);
}
user.greeting2 = function(){
    console.log(`hello js user : ${this.names}`);
}

console.log(user.greeting2());
