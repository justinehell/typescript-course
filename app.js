var userInput;
var userName;
userInput = 5;
userInput = 'Max';
userName = userInput;
var userInput2;
var userName2;
userInput2 = 5;
userInput2 = 'Max';
//userName2 = userInput2; // error The 'unknown' is not assignable to type 'string'
// we need to check the type before assigning the value of an unknown type to another variable with a fixed type
if (typeof userInput === 'string') {
    userName = userInput;
}
// unknown has at least some type checking, you cannot do whatever you want
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured!', 500);
