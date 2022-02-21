const fruits = [undefined, 'guava', 'coconut'];

const [firstFruits = 'strawberry', ...otherFruits] = fruits;

console.log(firstFruits);
console.log(otherFruits);
