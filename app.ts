const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple type = special array with lifex length and respectively type
} = {
  name: 'Justine',
  age: 30,
  hobbies: ['Sports', 'Web Dev'],
  role: [2, 'author'],
};

person.role.push('admin'); // doesn't throw an err (exception)
person.role[1] = 10; // throw err
