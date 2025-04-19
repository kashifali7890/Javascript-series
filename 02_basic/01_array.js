// array

const myArr = [0,1,2,3,4,5,]

const myHeroes = ["shah","sal","min"]

const myArr2 = new Array (1,2,3,4)

console.log(myArr[2]);

// Array methods

// myArr.push(6) // add into array 
// myArr.push(7) 
// myArr.pop();//delete last value in array
// myArr.unshift(7); //to add value at the first of the array
// myArr.shift(); // shift will remove the value that add with unshift

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(2));

//const newArr = myArr.join()// it will change the type of the array (same values)


//  console.log(myArr);
//  console.log(typeof newArr);//also change the type to string
//slice and splice


console.log("A", myArr);

const myn1 = myArr.slice(1,4)//second will be lost

console.log(myn1);
console.log("B", myArr);

const mn2 = myArr.splice(1,3)//it will print second value too
 console.log("C",myArr);
 
console.log(mn2);




