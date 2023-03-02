const array = [];
const aray = new Array();

// Array of strings:
const shoppingList = ['bread', 'cheese', 'icecream'];
//  Array of numbers:
const lotto5 = [1, 32, 53, 74, 85];
// Array of multiple types:
const myCollection = [ 121, 'cat', false, null, NaN];
shoppingList[1] = 'mozzarella';
console.log(shoppingList);
// Array push and pop
shoppingList.push("wine");
shoppingList.pop("wine");
console.log(shoppingList);
// Shift and Unshift
// to add something to the start:
shoppingList.unshift('lollipop'); // [ 'lollipop', 'bread', 'mozzarella', 'icecream' ]
let fruits = ['apple', 'orange'];
let veggies = ['sprouts', 'cucumber'];
let meats = ['steak', 'chicken', 'fish'];
console.log(fruits.concat(veggies)); //  [ 'apple', 'orange', 'sprouts', 'cucumber' ]
console.log(veggies.concat(fruits)); // [ 'sprouts', 'cucumber', 'apple', 'orange' ]

const allFoods = fruits.concat(veggies, meats);
console.log(`All foods:   ${allFoods}`);
  // apple,orange,sprouts,cucumber,steak,chicken,fish
  if (allFoods.includes('sprouts')) {
    console.log("I don't like sprouts");
}
// indexOf returns an index (or -1 if not found)
console.log(`the index of orange is: ${allFoods.indexOf("orange")}`);
if(allFoods.indexOf('fish') !== -1) {
    console.log("I have found some fish");
}
