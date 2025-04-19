
const promise1 = new Promise(function(resolve, reject){
    // Do an async task like
    // DB task, cryptography, network call.

    setTimeout(function(){
        console.log('Async task completed.');
        resolve()
        
    },1000)
})

promise1.then(function(){
    console.log("Promise consumed");
    
})

new Promise (function(resolve, reject){
    setTimeout(function(){
        console.log("Async task2");
        resolve()
        
    },1000)
}).then (function(){
    console.log("Async 2 resolved");
    
})

const promiseThree = new Promise (function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@gmail.com"})

    },1000)
})
promiseThree.then(function(user){
    console.log('user');
    

})

const promiseFour = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error= true
        if(!error){
            resolve({username:"ali",password:"1234"})
        }else {
            reject("Error: somthing went wrong")
        }
    },1000)
})
 promiseFour.then((user) => {
    console.log(user);
    return user.username
    
}).then((username) => {
    console.log();
    
}).catch(function(error){
    console.log("error");
    
}).finally(() => {
    console.log("the promise is either resolve or reject.");
    
})

// const promiseFive = new Promise (function (resolve, reject){
//     setTimeout(function(){
//         setTimeout(function (){
//             let error = true
//             if (!error) {
//                 resolve({username: "java", password: "1234"})
//             }else {
//                 reject("Error: js went wrong")
//             }
//         },1000)
//     })

    
// })
//Another example

const promiseFive = new Promise (function (resolve,reject) {
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"java",password:"1234"})
        }else{
            reject("Error: js went wrong")
        }

},1000);
});

promiseFive.then((user) => {
    console.log("User:", user);
})
.catch((err) => {
    console.log(err);
});



async function consumePromiseFive () {
    try {
        const response = await promiseFive 
        console.log(response);
        
    } catch (error){
        console.log(error);
        
    }
}
consumePromiseFive()

// async function getAllUser(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data); 
//     } catch (error) {
//         console.log("E:", error);
        
        
//     }
// }

// getAllUser();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((error) =>{
    console.log(error);
    
});