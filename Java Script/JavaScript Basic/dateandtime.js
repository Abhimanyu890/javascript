// Dates

let myDate = new Date()
 console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);  // Output is Object

let myCreatedDate = new Date(2024 , 1 , 12)
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date (2024 , 0 , 8 , 12 ,55)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date (2000 , 5 , 20)
console.log(myCreatedDate3.toString());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

