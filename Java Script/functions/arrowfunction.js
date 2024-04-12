const user = {
    username : "abhiamnyu",
    price : 999,

    welcomeMessage : function(){
           console.log(`${this.username} , welcome to website`);    // here this refer to the current contest means uns=der the curlybracesss
           console.log(this);
    }
    
}

// user.welcomeMessage()
// user.username = "chanchal"
// user.welcomeMessage()

// console.log(this);

// 

// const chai =function (){
//       let username = "hitesh"
//       console.log(this.username);
// }


const chai = ()  => {
    let username = "hitesh"
    console.log(this);
}
// chai()


// const addTwo = (num1 , num2) =>{
//     return num1 + num2
// }
// const addTwo = (num1 , num2) => num1 + num2

// const addTwo = (num1 , num2) => (num1 + num2)  // when we use return keyword the it is called Explicit and when we don't use return keyword then it is called implicit.

const addTwo = (num1 , num2) => ({username : "abhimanyu"})
console.log(addTwo(3,7));



