// Difference variables declared

let num = 10;
const str = "Hello, World!";
var isActtive = true;
let nothing = null;
let notDefined = undefined;
let person = {name:'Maheshwar', age:22};
let numbers = [1,2,3,4,5];

//Displaying the types of variables
console.log("Type of num:", typeof num);
console.log("Type of str:", typeof str);
console.log("Type of isActive:", typeof isActtive);
console.log("Type of nothing:", typeof nothing);

//javascript quirk: typeof null returns 'object'
console.log("Type of notDefined:", typeof notDefined);
console.log("Type of person:", typeof person);
console.log("Type of numbers:", typeof numbers);