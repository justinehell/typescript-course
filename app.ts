let userInput: any;
let userName: string;

userInput = 5;
userInput = 'Max';
userName = userInput;

let userInput2: unknown;
let userName2: string;

userInput2 = 5;
userInput2 = 'Max';
userName2 = userInput2; // error The 'unknown' is not assignable to type 'string'

// we need to check the type before assigning the value of an unknown type to another variable with a fixed type
if (typeof userInput === 'string') {
  userName = userInput;
}

// unknown has at least some type checking, you cannot do whatever you want
