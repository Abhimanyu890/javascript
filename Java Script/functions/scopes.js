// var c = 300

let a = 300
// let a =10
// const b =20
// var c= 30

if (true){
    let a =10
    const b =20
    var c= 30
    console.log("INNER: " ,a);
}

// console.log(a);
//console.log(b);
// console.log(c);

function one (){
    const username = "abhimanyu"

    function two(){
        const website = "youtube"
         console.log(username);
    }
    // console.log(website);
    two()
}

// one()


if (true){
    const username = "hitesh"
    if (username === "hitesh"){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

// *********************** intersting ***********


console.log(addone(5));

function addone(num){
return num +1
}


addTwo(5)    // not print because we store the function in the variable 

const addTwo = function(num){
    return num + 2
}

