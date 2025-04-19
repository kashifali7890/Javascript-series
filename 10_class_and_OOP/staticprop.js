class User {
    constructor (username){
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
        
    }
    static createID(){
        return `123`
    }
}
const ali = new User ("ali")
//console.log(ali.createID());

class Teacher extends User {
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iphone = new Teacher ("iphone","i@pk.com")
iphone.createID;
