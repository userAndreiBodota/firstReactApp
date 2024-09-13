export const performOperation = (previous, current, operation) => {
  switch (operation) {
    case "+":
      return previous + current;
    case "-":
      return previous - current;
    case "*":
      return previous * current;
    case "/":
      return previous / current;
    default:
      return undefined;
  }
};
