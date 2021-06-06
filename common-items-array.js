/*
Given 2 arrays, create a function that let's a user know (true, false)
whether these two arrays contain common items
*/

// coding not the best approach

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

// big O (a*b)
// Time complexity
// Space complexity (0)

const arr1 = ['z', 1, 2, 'y'];
const arr2 = ['a', 'c'];

console.log('containsCommonItem:', containsCommonItem(arr1, arr2));

// code a better approach using hash tables
function containsCommonItem2(arr1, arr2) {
  // Steps
  // loop the first array and create a map of objects
  // loop through the second array and look for a common item
  let objMap = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!objMap[arr1[i]]) {
      const item = arr1[i];
      objMap[item] = true;
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (objMap[arr2[j]]) {
      return true;
    }
  }
  return false;
}

console.log('containsCommonItem2', containsCommonItem2(arr1, arr2));

// using es6
const containsCommonItem2 = (arr1, arr2) =>
  arr1.some((item) => arr2.includes(item));
