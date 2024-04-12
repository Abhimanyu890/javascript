const name ="Abhimanyu "
const repoCount =50

// console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String ('Abhimanyuu'); 

console.log(gameName[0]); // [0] is will give the key value of that String 

console.log(gameName.__proto__); // __proto__ for gatting the object

console.log(gameName.length); // getting the length of the chreacter 
console.log(gameName.toUpperCase);  // getting the the chreacter in capital letter 
console.log(gameName.charAt(2)); // getting the chreacter position
console.log(gameName.indexOf('y')); 

const newString = gameName.substring(0,5)   
console.log(newString);

const anotherString = gameName.slice (-9,5)
console.log(anotherString);

const newStringOne = "   Abhimanyu     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abhimanyu.com/abhimanyu%60singh"

console.log(url.replace('%60', '-'));
