// const user ={
//     user:"vishnu",
//     price:99,
//     welcomeMessage :function(){
//         console.log(`${this.user}, welcome`);
//         console.log(this);
//    }
// }

// user.welcomeMessage()
// user.user="vish"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     const user ="vishnu"
//     console.log(this.user);//undefined
// }
// chai()

// const chai = ()=>{
//     let user = "vishnu"
//     console.log(this);
// }
// chai()

// const addTwo = (n1,n2)=>{
//     return n1+n2
// }

// const addTwo = (n1,n2)=> n1 +n2
// const addTwo = (n1,n2)=> (n1 +n2)
const addTwo = (n1,n2)=> ({name:"vishnu"})
console.log(addTwo());