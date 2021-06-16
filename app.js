function add(n1, n2) {
  return n1 + n2;
}
function add2(n1, n2) {
  return n1.toString() + n2.toString();
}
function printResult(num) {
  console.log('Result: ', +num);
}
printResult(add(5, 12)); // Result: 17
console.log(printResult(add(5, 12))); // undefined

function printResult2(num) {
  console.log('Result: ', +num);
  return;
}
