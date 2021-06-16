// JS may of handling status...
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}
// enum assigns labels to numbers by default (but we can assign a custom value, like so Admin = 5, READ_ONLY = "READ" etc...)

const person = {
  name: 'Justine',
  age: 30,
  hobbies: ['Sports', 'Web Dev'],
  //role: ADMIN,
  role: Role.ADMIN,
};
