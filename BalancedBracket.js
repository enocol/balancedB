function balancedBracket(str) {
  const stack = [];
  const opening = ['(', '[', '{'];
  const closing = [')', ']', '}'];

  for (let char of str) {
    if (opening.includes(char)) {
      stack.push(char);
    } else if (closing.includes(char)) {
      const matchingOpeningBracket = opening[closing.indexOf(char)];
      if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
