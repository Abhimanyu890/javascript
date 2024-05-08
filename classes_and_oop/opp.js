const user = {
    username: "Abhimanyu",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
    //  console.log("Got user details from database");
    console.log(`Username: ${this.username}`);
    }
}

console.log(user.username);
console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = User("abhimanyu", 12 , true)

console.log(userOne);
//  console.log(userOne.username)