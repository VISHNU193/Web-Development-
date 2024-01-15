if(true){

}
if(false){

}
const isUserLoggedIn = true
if(isUserLoggedIn){

}
if(2==="2"){
    console.log("hello");
}

// <,>,<=,>=,==,===,!=,!==

const temperature = 30;
if(temperature>=30){
    console.log("it is hot");
}

const score =200;
if(score>=200){
    let power = "fly";
    console.log(`your power is ${power}`);
}
if(score>100) console.log("you are ok");

if(score>500 && score<750){
    console.log("between 500 and 750");
}
else if(score<750){
    console.log("less than 750");
}
else{
    console.log("less than 500");
}

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
let month = 1;
switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("mar");
        break;
    case 4:
        console.log("apr");
        break;


    default:
        console.log("month not found");
        break;
}

//truthy and falsey
const email ="user123@gmail.com"
if (email) {
    console.log("got email");
} else {
    console.log("no email");
}
let email2 =""
if (email2) {
    console.log("got email");
} else {
    console.log("no email");
}

//falsey => flase,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy => all other values
// "0",'false',[],{},function(){}   

const emptyObj ={
}

if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}

//false == 0 == "" not equal to null,undefined,NaN
if (0===undefined) {
    console.log("yes");
}

//Nullish coalescing operator (??): null undefined

let val1 ;
val1 = null ?? 10
console.log(val1);//10
val1 = 5 ?? 10
console.log(val1);//5
val1 = undefined ?? 15
console.log(val1);//15

val1 = null ?? null ?? 20
console.log(val1);//20


//ternary operator

//condition ? true : false
const price = 100;
const priceTag = price === 0 ? "free" : price > 0 ? "$" + price : "Free"