function add(n1: number, n2: number): number {
  return n1 + n2;
}

function add2(n1: number, n2: number): string {
  return n1.toString() + n2.toString();
}

function printResult(num: number): void {
  // void means that this function doesn't have a return statment (or an empty return)
  console.log('Result: ', +num);
}

printResult(add(5, 12)); // Result: 17
console.log(printResult(add(5, 12))); // undefined

// BONUS - void VS undefined type
function printResult2(num: number): undefined {
  // undefined means that this function MUST have an empty return statment
  console.log('Result: ', +num);
  return;
}
