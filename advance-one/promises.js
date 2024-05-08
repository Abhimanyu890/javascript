const promiseOne = new Promise(function(resolve , reject){
    // Do an async task 
    // DB calls , crypotography , network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    }, 1000)
})


promiseOne.then(function(){      // here then directly connect to resolve
     console.log("Promise consumed");
})

new Promise(function(resolve , reject){
   setTimeout(function(){
    console.log("Async task 2");
    resolve()
   }, 1000)
}).then(function(){
    console.log("Async 2 resolve");
})


const promiseThree = new Promise(function(resolve , reject){
    setTimeout(function(){
        resolve({username: " Abhimanyu" , email:"abhimanyu@example.com"})
    } , 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "abhimanyu" , password: " 1234"})
        }else {
            reject('ERROR: Something Went Wrong')
        }
    } , 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() =>console.log("The promise is either resolve or rejected"))


const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Chanchal" , password: " 1234"})
        }else {
            reject('ERROR: Chanchal Went Wrong')
        }
    } , 1000)
})


async function consumePromiseFive(){
    try {
        const response = await promiseFive
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch ('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise')

        const data = await response.json()
        console.log(data);
    } catch (error) {
      console.log("E: " , error);  
    }
}

getAllUsers()

 