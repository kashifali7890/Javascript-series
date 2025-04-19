
/* there are two data types 
primitive and non primitive 

primitive are seven in categories

string, number, boolean, null, Bigint, undefiened,
symbol


Refrence types or non primitive

Array, Objects, Functions

*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') // symbol example
const anotherId = Symbol('123')
//console.log (id === anotherId);

const bigNumber = 665556623256456556n // bigint 

// non primitive (objects)

const heros = ["ali","ahmed","usman"]// array

//objects
{
    let myobj = {
    name: "ali",
    age: 22,    
    }
    
}
//functions

const myFunction = function (){
    console.log("hello")
}

//console.log(typeof myFunction)
//console.log(typeof id);

//******************* types of memory 

// stack (primitive), Heap(non-primitive)

let myYoutubename = "abc.com"

let anothername = "myYoutubename"
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anothername);

let user1 = {
    email: "user@google.com",
    upi: "user@bl"

}

let user2 = user1

user2.email = "user2@google.com"
console.log(user1.email);
console.log(user2.email);