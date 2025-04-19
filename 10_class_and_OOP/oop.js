//object literal
const user = {
    username: "ali",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details fron DBase.");
        // console.log(`username: ${this.username}`);
        //console.log(this);
        
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this);

function User (username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
        
    }
    return this
}
const userOne = new User("ali",12,true)
const userTwo = new User("ali",11,false)
console.log(userOne.constructor);
//console.log(userTwo);




