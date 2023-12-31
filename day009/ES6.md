# ECMAScript 2015 (ES6) Features Overview

ECMAScript 2015, also known as ES6, introduced a significant update to JavaScript, bringing new syntax and powerful features. This document provides an overview of these key features.

## 1. `let` and `const`

### `let`
- Introduces block-scoped variables.
- Variables declared with `let` can be reassigned but not redeclared within the same scope.
- `let` variables declared in a scope can not be accessed outside of that scope.

```javascript
let x = 1;
if (x === 1) {
  let x = 2;
  console.log(x); // 2
}
console.log(x); // 1
```

### `const`
- Used for declaring variables meant to be constant.
- The value assigned to a const variable cannot be reassigned.
- `const` variables declared in a scope can not be accessed outside of that scope.

```javascript
const PI = 3.14;
PI = 3.15; // TypeError: Assignment to constant variable.
```

## 2. Arrow Functions
- Provides a more concise syntax for writing function expressions.
- Does not have its own bindings to this or super, and should not be used as methods.

```javascript
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

## 3. Template Literals
- Allows for string interpolation and multi-line strings.
- Uses backticks (`) rather than quotes.

```javascript
const name = 'World';
console.log(`Hello, ${name}!`); // "Hello, World!"
```

## 4. Default Parameters
- Enables setting default values for function parameters.

```javascript
function greet(name = 'World') {
  return `Hello, ${name}!`;
}
console.log(greet()); // "Hello, World!"
```

## 5. Destructuring Assignment : 비구조화 할당
- Simplifies extracting values from arrays or properties from objects.

### `Array Destructuring`
```javascript
// 비구조화 할당 방식
const [book4, book5] = ['Java','C#','Python','PHP','JaveScript'];
console.log("비구조화 할당 방식의 상수 출력: ", book4, book5); // Java C#
// 비구조화 할당, 나머지는 배열로
const [book6, ...extrabooks] = ['Java','C#','Python','PHP','JaveScript'];
console.log("비구조화 할당 방식의 상수 출력: ", book6, extrabooks); // Java Array(4)
// 비구조화 할당 예시
const [book7, book8, book9, book10, book11, book12 = "DB"] = ['Java','C#','Python','PHP','JaveScript'];
console.log("비구조화 할당 방식의 상수 출력: ", book7, book8, book9, book10, book11); //Java C# Python PHP JaveScript
```

### `Object Destructuring`
```javascript
const {front, backend, server, getAuther} = {
    front:'React.js',
    backend:'Node.js',
    server:'Linux',
    rdbms:'MySQL=MariaDB',
    noSQL:'MongoDB',
    infra:'AWS',
    getAuther:function(){
        return "강창훈";
    }
}

console.log("비구조화 할당 방식으로 추출한 객체의 속성 변수 값", front, backend, server, getAuther); 
// React.js Node.js Linux f(){
        return "강창훈";
    }

```

## 6. Enhanced Object Literals
- Makes declaration of object literals more concise and expressive.

### `Property Shorthand`
```javascript
const a = 1, b = 2;
const obj = { a, b }; // a concise expression of var obj = { a: a, b: b };
console.log(obj); // { a: 1, b: 2 }
```
```javascript
function createPoint(x, y) {
  return { x, y };
}

console.log(createPoint(10, 20)); // { x: 10, y: 20 }
```

### `Method Shorthand`
- Previously, defining methods in object literals required a function expression
- This shorthand syntax can make object literals that act as simple interfaces or controllers much cleaner
```javascript
const calculator = {
  operand1: 5,
  operand2: 10,
  add() {
    return this.operand1 + this.operand2;
  },
  subtract() {
    return this.operand1 - this.operand2;
  }
};

console.log(calculator.add());      // 15
console.log(calculator.subtract()); // -5

```

## 7. Promises
- An object representing the eventual completion or failure of an asynchronous operation.
- Provides a cleaner, more robust way of handling asynchronous logic.
- It is to simplify asynchronous code, avoiding the pitfalls of callbacks, such as callback hell and pyramid of doom.

### 1. `Simulating Data Fetching`
```javascript
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data for user ${userId}...`);
    setTimeout(() => {
      // Simulating a successful server response
      const userData = {
        id: userId,
        name: 'John Doe',
        email: 'johndoe@example.com'
      };
      resolve(userData);
    }, 2000); // 2-second delay to simulate server response time
  });
}

```
### 2. `Processing the Fetched Data`
```javascript
function processUserData(userData) {
  return new Promise((resolve, reject) => {
    console.log('Processing user data...');
    setTimeout(() => {
      const processedData = {
        ...userData,
        name: userData.name.toUpperCase()
      };
      resolve(processedData);
    }, 1000); // 1-second delay to simulate processing time
  });
}
```
### 3. `Using the Functions with Promise Chaining`
```javascript
fetchUserData(123)
  .then(userData => {
    return processUserData(userData);
  })
  .then(processedData => {
    console.log('Processed Data:', processedData);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
```
- fetchUserData is called first. It logs a message, waits for 2 seconds, then resolves with mock user data.
- The then following fetchUserData takes the resolved user data and passes it to processUserData.
- processUserData then logs a message, waits for 1 second, and resolves with the modified user data (uppercase name).
- The second then logs the processed data.
- If any error occurs during these operations, the catch block will log the error.

## 8. Classes
- Syntactic sugar over JavaScript's existing prototype-based inheritance.
- Provides a clearer and more concise way to create objects and deal with inheritance.

### `Inheritance`
- The `extends` keyword is used in class declarations to create a class as a child of another class.
- The `super` keyword is used to call the constructor of the parent class and to access the parent's methods.
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class's constructor
    this.breed = breed;
  }

  speak() {
    super.speak(); // Call the parent class's method
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex', 'Golden Retriever');
dog.speak();
// Output:
// Rex makes a noise.
// Rex barks.

```

## 9. Modules
- Introduces native support for modules in JavaScript.
- Use export to expose modules, and import to bring them into other modules.

### `Exporting`
```javascript
// In file math.js
export const add = (a, b) => a + b;
```

### `Importing`
```javascript
// In another file
import { add } from './math.js';
console.log(add(2, 3)); // 5
```






