const food = [
  { name: 'apple', type: 'fruit' },
  { name: 'beef', type: 'meat' },
  { name: 'orange', type: 'fruit' },
  { name: 'corn', type: 'vegetable' },
  { name: 'chicken', type: 'meat' },
  { name: 'asparagus', type: 'vegetable' },
  { name: 'grapefruit', type: 'fruit' }
];


// const fruits = food.filter(function(item) {
//   return item.type === 'fruit';
// });

const fruits = food.filter(item => item.type === 'fruit');

// const fruits = [];
//
// for (let i = 0; i < food.length; i++) {
  // if (food[i].type === 'fruit') {
  //   fruits.push(food[i].name);
  // }
// }

console.log(fruits);
