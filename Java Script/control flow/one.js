// if 


const isUserLoggedIn = true
const temperature = 18

if  (temperature === 15){
     console.log("less than 20");
}
else {
    console.log("tempperature is greater than 20");
}

console.log("Execuated");

// < (less than) , < (greater than) ,<= (less than equal to) ,>= (greater than equal to) , == (equal) , != (not equal) ,=== (strict equal) , !== (not equal) 


const score = 200 

if (score > 100){
    let  power = "fly"    // var is used as a global variable but "const" and "let" can't be as a global variable
    console.log(`User power : ${power}`);
}
// console.log(`User power : ${power}`);


const balance = 1000

// if (balance > 500)  console.log("test");
// console.log("test 2");


if (balance < 500) {
      console.log("less than");
} else if (balance < 750) {
    console.log("less than 700");
} else if (balance <900){
    console.log("less than 750");
}
 else {
    console.log("less than 1200");
}


const userLoggedIn = true 
const debitCard =true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged In ");
}

