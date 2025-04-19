class User {
    constructor(unsername){
        this.username = unsername;
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(unsername, email,password){
        super(unsername);
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course has been added ${this.username}`);
    
    }
        
    
}
const chai = new Teacher ("chai","chai@pk.com","123")
chai.addCourse();
chai.logMe();

const teamasala = new User ("teamasala")
teamasala.logMe();

console.log(chai instanceof User);

