// Three ways of doing reverse string
// Using loop
function reverse(str) {
  let reversed = [];

  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  }

  return reversed.join('');
}

// Using array reverse
function reverse2(str) {
  return str.split('').reverse().join('');
}

// using es6 syntax
const reverse3 = (str) => [...str].reverse().join('');

const str = 'hello i am christian';

console.log(reverse(str));
console.log(reverse2(str));
console.log(reverse3(str));
