const user = {
    username: 'John Doe',
    price: 999,

    welcomeMessage: function() {
       //this use refer for current content
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai () {
//     let username = "ali"
//     console.log(this.username);
    
// }
// chai()

// const chai = function () {
//     let username = "ali"
//     console.log(this.username);
    
// }
// chai()

const chai = () => {
    let username = "ali"
    console.log(this);
    
}
// chai()

const addTwo = (num1 , num2) => {
    return num1 + num2
}
// console.log((addTwo(3, 4)));

const divided = (num1, num2) => {
    return num1 / num2
}
// console.log((divided(8, 5 )));


const multiply = (num1 , num2) => {
    return num1 * num2
}
// console.log(multiply(9,5));
// explicit return
const plus = (num1 , num2) => {
    return num1 + num2
}
// console.log(plus(100,200));

// shortest way to write this

const minus = (num1 ,num2) => num1 - num2 ;
// console.log(minus(500,250));
// other way to write. it is implicit return
const minus2 = (num1 , num2) => (num1 - num2)
console.log(minus2(750,800));

// to get object output

const addone = (num1,num2) => ({name:"ali"})

console.log(addone(2,1));

const myArray = [2,4,5,6,]
 
