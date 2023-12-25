//strings
const names ="vishnu"
const count =79
console.log(names+count);//outdated syntax

//use backticks
console.log(`hello my name is ${names} and count is ${count}`);//string interpolation=>modern method

const game = new String('   game name  ');//string value pair not array
console.log(game.length);
console.log(game[0]);
console.log(game.__proto__);
console.log(game.toUpperCase());
console.log(game)
console.log(game.charAt(3));
console.log(game.indexOf('g'));

const newString = game.substring(0,4)//0 to 3 *** doesnt take negative values
console.log(newString);
const anotherString = game.slice(-7,4)
console.log(anotherString);

const newstring = game.trim()
console.log(newstring);

const url = newstring.replace( '  ','-')
console.log(url)


console.log(game.split(' '))



