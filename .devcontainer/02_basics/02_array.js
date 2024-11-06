const marvel_heros = ["thor", "Ironman", "spideerman"]
const dcheros = ["superman", "flash", "batman"]

//marvel_heros.push(dcheros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);//first arraylist er 3 element then secnd list er 1 element

// const allheros = marvel_heros.concat(dcheros); //add two arrays and put all elements in one array
// console.log(allheros);

const all_new_heros = [...marvel_heros,...dcheros] //spread... means all elements behave individual
//console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) //flat keyword sob element eksathe kore new element korbe 
console.log(real_another_array);

console.log(Array.isArray("Kimti"))
console.log(Array.from("Kimti")) //kimti name k array banay dibe from keyword
console.log(Array.from({name: "Kimti"}))//empty array dibe 

let score1 = 100
let score2 = 200
let score3 = 50

console.log(Array.of(score1, score2, score3)); //Array.of mane variable, element sob kichu k array te convert korbe


