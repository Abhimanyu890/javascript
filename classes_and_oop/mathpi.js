const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvilable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
