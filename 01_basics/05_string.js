const name = "kim-hc"
const repoCount = 50

//do not use like this ..console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//modern way to erite string

const gameName = new String("Kimtiii")// string declear

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-6, 4);
console.log(anotherString);

const newStringOne = "  kim  "
console.log(newStringOne);
console.log(newStringOne.trim());  //trim use for remove unnecessary space

const url = "https://hitesh.com/hitesh%20choudhury"
console.log(url.replace('%20','_'))

console.log(url.includes('kim'))
console.log(gameName.split('-'))