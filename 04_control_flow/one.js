//if
const isUserloggedIn = true
const temperature =41

// if (temperature === 40) {
// console.log("less than 50");
    
// }else {
//   console.log("temperature is less than 50");  
// }
// console.log("execute");


// const score = 200

// if(score > 100){
//     //const power = "fly"
//     //var power ="fly" // var has global scope
//     let power = "fly" // let has block scope
//     console.log(`User power ${power}`);
    
// }
// console.log(`User power ${power}`);

// > < != !. !< === ==

const balance =1000
// implict scope ( not recommended)
//  if (balance > 500) console.log("test"),
//  console.log("test2");
 
// if (balance < 500 ){
//     console.log("less than 500");
    
// }else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 900) {
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("allow to buy courses");
    
}
if(loggedInFromGoogle ||loggedInFromEmail ){
    console.log("User logged in");
    
}

