// for of 

 ["" , "" , "" ,""] // string in the array
 [{} ,{} ,{} ,{}]   // object in the array 


 const arr = [1,2,3,4,5,]

 for (const num of arr) {
     console.log(num);
 }

 const greeting  = "Helloe world !"

 for (const greet of greeting) {
     console.log(`Each char is ${greet}`);
 }


 // Maps    (known for unique value )

 const map = new Map()
 map.set('IN' , "India")
 map.set('Fr' , "France")
 map.set('AUS' , "Austrlia")

 console.log(map);

 for (const [ key, value] of map) {
    console.log(key , ':-', value);
 }


//  const myObject = {
//     'game 1' : 'IGI',
//     'game 2' : 'BGMI'
//  }

//  for (const [key , value] of myObject) {
//      console.log(key , ':-' , value);
//  }





