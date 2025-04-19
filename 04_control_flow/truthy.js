const userEmial = []

if (userEmial){
    console.log("user got email");
    
}else {
    console.log("user has no email");
    
}

/* falsy values 
false , 0, -0 bigInt 0n, "",null, undefined,NaN
truthy values
"0",'false'," ",[],{},function(){},

*/
// to check array if array is empty or not
if(userEmial.length === 0) {
    // console.log("Array is empty");
    

}
// to check obkect if empty or not
const empty = {}
if(Object.keys(empty).length === 0){
    // console.log("object is empty");
    
}

// Nullish Coalescing operator (??): null defined

let val1 ;

//val = 5 ?? 10 //nullish operator

// val1 = null ?? 10

//val1 = undefined ?? 15

val1 = null ?? 10 ?? 15
console.log(val1);

// Terniary operator

// condition ? true : false

const iceTeaPice = 100
iceTeaPice <= 80 ? console.log("less then 80") : console.log("more than 80")