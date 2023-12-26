
if (true) {
    let a = 10
    const b= 20
    c = 30//global scope
    
}

// console.log(a);
// console.log(b);
// console.log(c);

//scope is different in node and browser *****

function one(){
    const username ="vishnu"
    function two(){
        const website ="youtube.com"
        console.log(username);
    }

    // console.log(website);
    two()
}
// one()

// if (true) {
//     const username = "vishnu"
//     if(username==="vishnu"){
//         const website ="youtube"
//         console.log(website+username);
//     }
//     // console.log(website);
// }
// console.log(username);

//+++++++++++++++++++++interesting++++++++++
console.log(add1(5));//exxecuted

function add1(value) {
    return value+1
    
}
console.log(add1(5));
console.log(addTwo(6));//reference error = .hoisting execution context

const addTwo = function( num){
    return num + 2
}
