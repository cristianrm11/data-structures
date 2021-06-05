function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

const firstCharater = firstRecurringCharacter([1, 2, 3, 4, 5, 9, 5]);
console.log('using for... this is low performance sln', firstCharater);

/// now solve the previous exercise with hash tables to increment performance

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
}

console.log(
  'using hash firstRecurringCharacter',
  firstRecurringCharacter2(['a', 'b', 'u', 'y', 'e', 'z', 'x', 'y'])
);
