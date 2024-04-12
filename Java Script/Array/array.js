// array
const myArr = [0 ,1 ,2 ,3 ,4 ,5]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1 ,2 ,3, 4)

console.log(myArr[1]);

// array method

myArr.push(6)
myArr.push(7)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(8)  // putting the value in the first 

myArr.shift(8)


console.log(myArr);

console.log(myArr.includes(8));  // getting the boolean value

console.log(myArr.indexOf(3));

const newArr = myArr.join()   // this gives the string value 

console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice , splice
 
console.log("A" , myArr);

const myn1 = myArr.slice(1, 3)   // print 1 and 2 only

console.log(myn1);
console.log("B" ,myArr);

const myn2 = myArr.splice(1, 3)   // in splice it take the last value but when you print the array then it remove the value 
console.log("C", myArr);
console.log( myn2);


