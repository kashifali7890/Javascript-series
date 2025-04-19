//Declaring function
function sayMyName() {
    console.log("A");
    console.log("L");
    console.log("I")
    
}
//sayMyName()// execute function

// function addTwoNumbers (number1,number2) /*function parameters*/ {
//     console.log(number1 + number2) ;
// }

// addTwoNumbers(3 , 4)
// addTwoNumbers(3 , "4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)  // functions arguments

function addTwoNumbers (number1,number2) /*function parameters*/ {
    //let result = number1 + number2
    return number1 + number2

}
const result = addTwoNumbers(3, 5)
//console.log("Result : ", result);


function loginUserMessage(username = "sam"){
    //if(username === undefined)
      if(!username) {
        console.log("Please enter a user name");
        return
    }
    return`${username} just Logged in`
}
//console.log(loginUserMessage("Ali"));

function today (Day) {
    return `Today is ${Day}`;
}
//console.log(today("Monday"))

function TodayDate (Date) {
    return `Today date is ${Date}`;

}
//console.log(TodayDate("23/03/2025"))

function Hello () {
return Hello;
}
//console.log("Hello")

// (....      .....) rest and spread operators
function calculateCartPrice (...num1) {
    return num1
}

//console.log(calculateCartPrice(100,200,300));

const user = {
    username:"ali",
    price: 133
}
function handleObject(anyobject) {
    //console.log(`User name is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user);

const namelist = {
    name1: "ali",
    name2: "sam"
}
function allnames (names){
    console.log(`There are two names ${names.name1} and ${names.name2} in the list`);
}
//allnames(namelist);

// direct object passing
allnames ({
    name1: "ali",
    name2: "sam"
})

// passing arra values

const myNewArray =[100,200,300,400]

function returnSecondValue (getArray) {
    return getArray[0];
}
console.log(returnSecondValue(myNewArray));


