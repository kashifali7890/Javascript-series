//const descriptor = Object.getOwnPropertyDescriptors(Math,"PI")

//console.log(descriptor);


//console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name: "ginger",
    price: "250",
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptors(chai, "name"));

// Object.defineProperty(chai, "name", {
//     writable:false,
//     enumerable: false
// })
//console.log(Object.getOwnPropertyDescriptors(chai, 'name'));

for(const [key,value]of Object.entries(chai)){
    console.log(`${key}:${value}`);
    
}