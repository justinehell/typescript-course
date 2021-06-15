const person = {
  name: 'Justine',
  age: 30,
  hobbies: ['Sports', 'Web Dev'],
};

console.log(person.name);

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // works because TS knows hobby is a string
  // console.log(hobby.map()) --> Error because map doesn't exist on type string
}
