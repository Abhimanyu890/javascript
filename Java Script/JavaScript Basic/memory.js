// types of memory ( stack (primitive) , Heap(non-primitive) )


let myYoutubename = "therexdotcom"

let anothername = myYoutubename 
anothername = "therrexhubb"

console.log(anothername);
console.log(myYoutubename);

let userOne ={
    email : "thakuranaabhimanyusingh@gmail.com"
    
}

let userTwo = userOne 

userTwo.email = "abhimanyu@google.com"

console.log(userOne.email);
console.log(userTwo.email);


// Stack Memory : It is a sort of memory allocation that the OS continuosly manage and 
//                uses to store local variable in a LIFO order 

// Heap Memory : It is a type of dynamic memory allocation used for storing objects 
//               and data structure that required longer lifespan than stack memory 
