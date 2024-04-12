const marval_heros = ["Thor", "Ironman" ,"Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marval_heros.push(dc_heros)  // instead of push we can also use concat , both add the value to the array

// console.log(marval_heros);
// console.log(marval_heros[3] [2]);

const allHeros = marval_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marval_heros, ...dc_heros]   // spread  operator used here (do the same work as concat do)

console.log(all_new_heros);


const another_array = [1, 2, 3,[4, 5, 6],7 ,[6 ,7 ,[4 , 5]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Abhimanyu"));
console.log(Array.from("Abhimanyu"));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));




