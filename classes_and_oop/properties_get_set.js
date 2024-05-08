function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const chai = new User("chai@chai.com", "chai")

console.log(chai.email);