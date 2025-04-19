// let a = 10
// const b = 20
// var c = 30

// {} are the scope

let a = 300 //global scope
if (true) { // block scope start
    let a = 10
    const b = 20
    //var c = 30 

    //console.log("Inner :", a)
} // block scope end


//console.log(a);
//console.log(b);
//console.log(c);

// nested scope

function one() {
    const username = "ali"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);

    two()
    
}
//one()

if (true) {
    const username = "ali"
    if(username === "ali") {
        const website = "youtube"
        //console.log(username + website);
    }
    //console.log(website);
    
}
//console.log(username);

// ****************** Interesting ***********

function addone(num) {
    return num +1
}
console.log(addone(5));


console.log(addTwo(5));
const addTwo = function(num) {
    return num + 2
}

// this key word work for current 
 

