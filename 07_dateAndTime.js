//temporal api for future

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);//object

//output
// Sun Dec 24 2023 13:25:20 GMT+0530 (India Standard Time)
// Sun Dec 24 2023
// 2023-12-24T07:55:20.693Z
// 2023-12-24T07:55:20.693Z
// 24/12/2023
// 24/12/2023, 1:25:20 pm
// object

// let myCreatedDate = new Date(2023,0,21);//month starts from 0 **
// let myCreatedDates = new Date();
// console.log(myCreatedDate.toDateString());

// let mytimestamp = Date.now();// ms from 1st jan 1970
// console.log(mytimestamp);

// console.log(Math.floor(Date.now()/1000));//in seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getHours())

console.log(newDate.toLocaleString('default',{
    weekday:"long",
    era:"short"
}))

