function sayMyName(){
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("Y");
    console.log("U");
}

sayMyName   // this is reference 
// sayMyName() // this is call the function 

function addTwoNumbers(number1 , number2){
      console.log(number1 + number2);
}

addTwoNumbers(3,5)


function addTwoNumbers(number1 , number2){
//    let result = number1 + number2 
//    return result

return number1 + number2
}

const result = addTwoNumbers(3,4)
// console.log("Result :",result)

function loginUserMessage(username){
    if(username === undefined){       // instead of this we can use if(!username) both emplies the same value .
        console.log("Please enter a username ");
        return 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())

function calculateCartPrice(...num1){
       return num1
}

// console.log(calculateCartPrice(200,300,400));

const user = {
    username: "Abhimanyu",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject(
    {
        username: "Chanchal",
        price:499
    }
)

const mynewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[3]
}
// console.log(returnSecondValue(mynewArray));

console.log(returnSecondValue([200,300,400,500]));