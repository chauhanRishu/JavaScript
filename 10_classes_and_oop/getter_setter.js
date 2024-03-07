class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}rishu`
    }

    set password(value){
        this._password = value
    }
}

const rishu = new User("r@gmail.com", "abc")
console.log(rishu.password);
console.log(rishu.email);