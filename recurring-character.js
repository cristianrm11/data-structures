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

console.log(firstCharater);
