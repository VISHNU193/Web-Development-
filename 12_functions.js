// function SayMyName(params) {
//     console.log("v");
//     console.log("i");
//     console.log("s");
//     console.log("h");
//     console.log("n");
//     console.log("u");
// }
// SayMyName()

// function add(num1,num2){
//     console.log(num1+num2);
// }

// add(4,0)

// function add(num1,num2){
//     return(num1+num2);
// }

// const reesult = add(3,45)
// console.log(reesult);

// function loginUserMessage(username){
//     if(username===undefined ||!username){//"" and undefined are considered as false
//         // console.log(`pleasse enter valid username`);
//         return
//     }
//     return `${username} just logged in`;

// }

// console.log(loginUserMessage(""));

// function calculateCarPrice(val1,val2,...num1){//... rest oeprator and spread operator based on usage
//     return num1
// }

// console.log(calculateCarPrice(200,400,500,90,890));

// const user ={
//     username:"vishnu",
//     price:900
// }
// function handleObject(anyObject){
//     console.log(`username is ${anyObject.username} and price ${anyObject.prices}`);
// }

// handleObject(user)

const newArray =[1,2,3,4,4,5,6]

function secondValue(getArray){
    return getArray[1]

}

console.log(secondValue(newArray));