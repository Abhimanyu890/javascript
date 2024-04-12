const score = 500
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNumber = 123.988
console.log(otherNumber);
console.log(otherNumber.toPrecision(5));

const hundreds = 1000000
console.log(hundreds.toLocaleString());  // output = 10,00,000
   


// ++++++++++++++++++++++++ Maths ++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // gives positive value
console.log(Math.round(4.7)); // output = 5
console.log(Math.ceil(4.2)); // output = 5
console.log(Math.floor(4.4)); // output = 4

console.log(Math.min(2,3,4,5));
console.log(Math.max(6,5,8,9));

console.log(Math.random()); // values lies between 0 and 1 
 console.log((Math.random()*10) +1);
 console.log(Math.floor(Math.random()*10) +1);

 const min =10
 const max =20

 console.log(Math.floor(Math.random()*(max-min+1))+min);
