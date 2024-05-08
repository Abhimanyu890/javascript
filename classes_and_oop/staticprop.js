class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${thsi.username}`);
    }

     createId(){
        return `123`
     }

}

const abhimanyu = new User("abhimanyu")
console.log(abhimanyu.createId);

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()