function mergeSortedArrays(arr1, arr2) {
  // check
  if (!arr1.length) return arr2; // if first array is empty, return the second
  if (!arr2.length) return arr1; // if second array is empty, return the first
  //
  const mergedArray = [];
  let itemArray1 = arr1[0];
  let itemArray2 = arr2[0];
  let i = 0;
  let j = 0;

  while (itemArray1 || itemArray2) {
    console.log('itemArray1:', itemArray1, 'itemArray2:', itemArray2, '\n');

    if (!itemArray2 || itemArray1 < itemArray2) {
      // the !itemArray2 validation is to know if for any reason reach an undefined value because of the lenght of one array is bigger than the other
      mergedArray.push(itemArray1);
      itemArray1 = arr1[i];
      i++;
    } else {
      mergedArray.push(itemArray2);
      itemArray2 = arr2[j];
      j++;
    }
  }

  console.log(mergedArray);
}

const array1 = [2, 6, 8, 9];
const array2 = [1, 4, 5, 15, 19];

// [0, 3, 4, 31], [3, 4, 6, 30];
mergeSortedArrays(array1, array2);

const mergeSortedArraysES6 = (arr1, arr2) => [...arr1, ...arr2].sort();
const sortedArrayEs6 = mergeSortedArraysES6(array1, array2);
console.log(sortedArrayEs6);
