function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log('Result: ', +num);
}

printResult(add(5, 12)); // Result: 17

let combinedValues: Function;
combinedValues = add;
console.log(combinedValues(8, 8)); // 16

//combinedValues = 5; // error

combinedValues = printResult;
console.log(combinedValues(8, 8)); // undefined because printResult only have 1 param

let combinedValuesWithoutParams: () => number; // define a function without params, return a number
let combinedValuesWithParams: (a: number, b: number) => number; // define a function with 2 params number, return a number
