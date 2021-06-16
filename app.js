// JS may of handling status...
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
  Role[(Role['ADMIN'] = 0)] = 'ADMIN';
  Role[(Role['READ_ONLY'] = 1)] = 'READ_ONLY';
  Role[(Role['AUTHOR'] = 2)] = 'AUTHOR';
})(Role || (Role = {}));
var person = {
  name: 'Justine',
  age: 30,
  hobbies: ['Sports', 'Web Dev'],
  //role: ADMIN,
  role: Role.ADMIN,
};
