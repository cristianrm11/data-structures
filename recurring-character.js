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
      // if (0) falsy in js...type cohersion --> does the key exist, if already have it it will return the index so we must return the value in that position;
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

// let's say you have this input for each of the function, can you detect the different of how the recurred character was detected, also they're different

console.log(firstRecurringCharacter([1, 10, 10, 1, 3, 2, 4]));
console.log(firstRecurringCharacter2([1, 10, 10, 1, 3, 2, 4]));
