function SetUsername (username){
    this.username = username
    console.log("called");
    
}
function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const ali = new createUser ("ali","chai@facebook.com","1243")

console.log(ali);
