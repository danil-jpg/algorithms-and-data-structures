function brackets(str: string): boolean {
  const stack: string[] = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else if (str[i] === ")") {
      let lastEl = stack.pop();
      if (lastEl === undefined) {
        return false;
      }
    }
  }

  console.log(stack);

  if (stack.length > 0) {
    return false;
  }

  return true;
}

console.log(brackets("x * ((y - 10))()"));
// let res = [];
// console.log(res.pop());
