// const tinder = new Object();//singleton object
const tinderUser ={}//not singleton object

tinderUser.id="123abc"
tinderUser.name="vishnu"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

//nesting of objects
// const regularUser = {
//     email:"vishnu@gmail.com",
//     fullname:{
//         userName:{
//             fname:"vishnu",
//             lname:"kumar k"
//         }

//     }
// }

// console.log(regularUser.fullname?.userName.fname);//?. for null safety when taking responses from apis
// console.log(regularUser.fullname?.userName.lname);

const obj1 ={1:'a',2:'b'}
const obj2 = {
    3:'1',
    1:'3'
}

// obj3 ={obj1,obj2}
// const obj3 = Object.assign({},obj2,obj1)//target,sources
const obj3 ={ ...obj1,...obj2}
// console.log(obj3);

const users =[
    {
        id:1,
        email:"123mail.com"
    },
    {
        id:2,
        email:"sdasmail.com"

    },
    {
        id:3,
        email:"sdasmail.com"

    },
    {
        id:4,
        email:"sdasmail.com"

    },
]

console.log(users[1].email);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
