// singleton 
// Object.create


// objects literals

const mySym = Symbol("key1")


const JsUser ={
    name:"Abhimanyu ",
    age:"22",
    location:"Motihari",
    email:"abhimanyusingh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Sunday"]


}

console.log(JsUser.email);

JsUser.email = "abhimanyu@gmail.com"   // to cahnge the value 
// Object.freeze(JsUser)  // when we use this then you cant't change the value 
JsUser.email = "abhimanyu@google.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
