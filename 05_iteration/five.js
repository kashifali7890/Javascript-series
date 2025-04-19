// foreach
const coding = ["js","ruby","java","python"]

// coding.forEach( function (item){
//     console.log(item);
    
// })

// coding.forEach( () => {
//     console.log(item);
// })

// function printMe (item) {
//     console.log(item);
// }
// coding.forEach(printMe);

// coding.forEach ( (item , index, arr) => {
//     console.log(item, index, arr);
// } )
const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "jv"
    },
    {
        languageName: "python",
        languageFile: "py"
    }
    
]
myCoding.forEach( (item) => {
    //console.log(item.languageName,item.languageFile);

})

const fruits = [
    {
        name: "apple",
        fileName: "ap"
    },
    {
        name: "banana",
        fileName: "ba"
    },
    {
        name: "orange",
        fileName: "or"
    }
]
fruits.forEach( (item) => {
    //console.log(item.name,item.fileName);
    
})

const fruitName = ["apple","orange","banana"]

fruitName.forEach( (item) => {
    //console.log(item);
})

let list_of_name = ["Elon","Bazoz","Zuckerberg","John"]
// for(let i =0; i < list_of_name.length;i++ ){
//     console.log(list_of_name[i]);
//     if(list_of_name[i] === "Zuckerberg"){
//         console.table("Found Zuckerberg !");
        
//     }else if (list_of_name[i] === "Bazoz"){
//         console.table("Found Zuckerberg !");
//         break
        
//     }
    
// }

let age =0;
// if(age >=20) {
//     console.log("you are an adult", age);
    
// }else if (age >=18){
//     console.log("you close to be an adult");
    
// }else if (age >= 14) {
//     console.log("you are a teenager",age );
// }else if (age >=10) {
//     console.log("you are a kid",age );
// }else if (age >=5) {
//     console.log("you are a baby",age );
// }else if(age ==0) {
//     console.log("you not born",age);
// }