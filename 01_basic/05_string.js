const name = "ali"
const repoCount = 50

//console.log(name + repoCount + "Value"); backday method
// modern method backtick
console.log(`Hello my anme is: ${name} and my repo count is:${repoCount} Value`);

// declare string

const gameName =  new String("alimalik")
// console.log(gameName[0]);
// console.log(gameName.__prototype__);

// console.log(gameName.length);
// console.log(gameName.constructor);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('l'));

const newString = gameName.substring(0, 2)
console.log(newString);

const anotherString = gameName.slice(4, 4)
console.log(anotherString);

const newStringOne = "   ali   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ali.com/ali%20malik"
// console.log(url);

// console.log(url.replace('%20', '-'));
// console.log(url.includes('malik'));
// console.log(url.startsWith('https://'));
// console.log(url.endsWith('ali.com'));
// console.log(url.includes('ha'));

const Name = 'ali-malik-melbourne'
console.log(Name.split('-'));


const newName = 'alimalik'
console.log(`hi, my name is: ${newName}`);

/*
String methods
1. .charAt(index)
2. .replace()
3. .indexof()
4. .includes()
5. .startsWith()
6. .endsWith()
7. .split()
8. .slice()
9. .substring()
10. .trim()
11. .length()
12. .constructure()
etc

*/
