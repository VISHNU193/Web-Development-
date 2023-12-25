//array

// const myArr = [4,7,'tf',67,"yugft",true];
// const myArr2= new Array(2,6,45,78,7);
// console.log(myArr2[0]);

// myArr.push(6);
// console.log(myArr);

// myArr.pop()
// console.log(myArr);

// myArr.unshift(0);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(7));

// const newArr = myArr.join();
// console.log(myArr);
// console.log(typeof newArr);//string

// const myn1 = myArr.slice(1,3);
// console.log(myn1);//*** returns section without including last index */

// const myn2 = myArr.splice(1,3);
// console.log(myn2);//*** removes section from original array */

// console.log(myArr);

const myn3 = [1,2,3];
const myn4 = [4,5,6];

// myn3.push(myn4)

console.log(myn3);

let myn5 = myn3.concat(myn4);
console.log(myn5);

//spread operator 
const myn6 = [...myn3,...myn4];
console.log(myn6);

let myn7 =[1,2,3,[4,5,6,7],8,[8,9,[10,11]]]

let real = myn7.flat(Infinity)
console.log(real);

console.log(Array.isArray("hello"));
console.log(Array.from("hello"));
console.log(Array.from({names: "vishnu"}));//interesting ***

let s1=28
let s2 = 89
let s3 = 78

console.log(Array.of(s1,s2,s3));