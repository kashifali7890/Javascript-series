const marvel_heroes = ["thor","Ironman","spideman"]
const dc_heroes = ["superman","flash","battman"]

marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);

const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const all_new_heroes = [...marvel_heroes,...dc_heroes]
//console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[4,5]]
const real_another_array = another_array.flat(Infinity)//spread out value

console.log(real_another_array);

console.log(Array.isArray("ali"));
console.log(Array.from("ali"));// convert to array

console.log(Array.from({name:"ali"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

