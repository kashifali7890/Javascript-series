// singletone

//object literals

//object.create

mysym = Symbol("key1")//creating symbol

const JSUser = {
    name:"ali",
    age:20,
    locaion:"mel",
    [mysym]:"key1",//using symbol in array
    email:"ali@gmail.com",
    isLoggedIn: false,
    lastLoggedinDays: ["monday","tuesday"]

}
//two way to get output from the objects
// console.log(JSUser.email);
// console.log(JSUser["email"]);
// console.log(JSUser["mysym"]);

// change object value
JSUser.email = "ali@chatgpt.com"
JSUser.email = "ali@chatgpt.com"
//console.log(JSUser);

JSUser.greeting = function(){
    console.log("hello JS User");
}
JSUser.greetingtwo = function() {
    console.log(`hello JS User, ${this.name}`);
}
console.log(JSUser.greeting());
console.log(JSUser.greetingtwo());


