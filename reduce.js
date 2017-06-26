// warmup!
//
// const food = [
//   { name: 'apple', type: 'fruit' },
//   { name: 'beef', type: 'meat' },
//   { name: 'orange', type: 'fruit' },
//   { name: 'corn', type: 'vegetable' },
//   { name: 'chicken', type: 'meat' },
//   { name: 'asparagus', type: 'vegetable' },
//   { name: 'grapefruit', type: 'fruit' }
// ];
//
// const fruits = food.reduce((acc, item) => {
//   if (item.type === 'fruit') {
//     acc.push(item);
//   }
//
//   return acc;
// }, []);
//
// console.log(fruits);
//
// const products = [
//   { name: 'Box fan', price: 20, cost: 10 },
//   { name: 'Sunscreem', price: 15, cost: 12 }
// ]
//
// const profit = products.reduce((acc, product) => {
//   acc += product.price - product.cost;
//
//   return acc;
// }, 0);

// console.log(profit);

const vowels = ['a', 'e', 'i', 'o', 'u'];
const str = 'aEwR4elXTOeaadogi;heprognveao;rinew;obaerovbaeiubvepnaroi;anw;riafwrgjaeh[orba[orgbaer;iubaeiltubaerkg/bae;eagarbguaeobi;ae;rubae;ivbiuvaeipvubaepiv]]';
const str2 = str.split('');

const result = str2.filter((item) => {
  if (vowels.includes(item)) {
    return true;
  }
  else {
    return false;
  }
})
.reduce(countVowels, {});

function countVowels(acc, item) {
  const item2 = item.toLowerCase();

  if (acc.hasOwnProperty(item2)) {
    acc[item2] += 1;
  }
  else {
    acc[item2] = 1;
  }

  return acc;
}

console.log(result);


// function countVowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   const result = {};
//
//   str = str.toLowerCase();
//
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       const vowel = str[i];
//
//       if (result.hasOwnProperty(vowel)) {
//         result[vowel] += 1;
//       }
//       else {
//         result[vowel] = 1;
//       }
//     }
//   }
//
//   return result;
// }

// console.log(countVowels('aEwR4elXTOea'));
