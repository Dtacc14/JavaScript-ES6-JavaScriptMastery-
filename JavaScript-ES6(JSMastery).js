//  JavaScrippt ES6

/* 
Hello to anyone looking through this project.
I created this project ot learn some of the new 
features of JS ES6. If you find this helpful, 
please feel free to copy and study. If you would 
like to recreate this on your own, follow along 
to "JavaScript Mastery".The video is "JavaScript 
ES6 for Beginners". Thanks!
*/

console.log('Learning JavaScript ES6:');

console.log(' ');

//  const and let

console.log('Const and Let:');

console.log(' ');

let age = 25; //  Can be reassigned
const name = 'David' // Cannot be reassigned

console.log(name + " " + age);

console.log(' ');

console.log('-----------------------------------------------------------------------');

console.log(' ');

// Arrow functions

console.log('Arrow Functions:');

console.log(' ');

// const add = (a , b) => {     -    Functions can be constants  
//     console.log(a + b);       
//}

const add = (a , b) => console.log(a + b);

add(3 , 2);

const array = [1, 2, 3];

array.map(n => console.log(n));

console.log(' ');

console.log('-----------------------------------------------------------------------');

console.log(' ');

// Template string

console.log('Template String:');

console.log(' ');

const greeting = (name) => { 

    const string = 'Hello, ' + name + '!'; 
    const templateString = `Hello, ${name}!`; // Uses backtics (top left corner of keyboard)

    console.log(templateString);
}

greeting('Friend'); // 'Friend' = parameter

console.log(' ');

console.log('-----------------------------------------------------------------------');

console.log(' ');

// Default Parameters

console.log('Default Parameters:');

console.log(' ');

const add2 = (a = 2, b = 2) => console.log(a + b); // *TO RESOLVE IF PARAMETER IS MISSING FOR ADD FUNCTION*

add2(3); // output = 5
add2(0); // output = 2
add2();  // output = 4
add2(3 , 3); // output = 6

console.log(' ');

console.log('-----------------------------------------------------------------------');

console.log(' ');

// Array destructuring

console.log('Array Destructuring:');

console.log(' ');

const array2 = [1 , 2 , 3 , 4];

// const first = array2[0];
// const second = array2[1];
// const third = array2[2];
// const fourth = array2[3];

// console.log(`First = ${first}, Second = ${second}, Third = ${third}, Fourth = ${fourth}`);

const [first, second, third, fourth] = array2;

console.log(first, second, third, fourth); // Simplified way top complete the above code

const [ first1 , , third1 ] = array; //  Use space if you dont need all array members

console.log(first1, third1);

console.log(' ');

console.log('-----------------------------------------------------------------------');

console.log(' ');

// Object destructuring

console.log('Object Destructuring:');

console.log(' ');

const object = {channelName: 'JS Mastery', views: 1500,}

// console.log(object.channelName) - To display need to use dot notation

// const channelName = object.channelName; - Can also be Displayed this way (INCLUDING BELOW)
// const views = object.views;
// console.log(`Channel Name: ${channelName}, Views: ${views}`);

const { channelName , views } = object; //  Simplified way to complete the above code

console.log(`Channel Name: ${channelName}, Views: ${views}`)

console.log(' ');

console.log('-----------------------------------------------------------------------');

console.log(' ');

// Rest operator - Allows us to not implicitly specify how many arguments our function will have

console.log('Rest Operator:');

console.log(' ');

//  const add3 = (a , b , c) => console.log([a, b, c].reduce((a, b) => a + b , 0)); - Ruduce = Built in array method. 

//  add3(1, 2, 3 ,); - Can only take in three arguments

const add3 = (...numbers) => console.log(numbers.reduce((a , b) => a + b, 0));

add3(1 , 2 , 3, 4 , 5 , 6 , 7); // Output = 28

console.log(' ');

console.log('-----------------------------------------------------------------------');

console.log(' ');

// Spread operator 

console.log('Spread Operator:');

console.log(' ');

const array3 = [1 , 2 , 3 , 4 , 5];

//  console.log(array3[0] , array3[1] , array3[2]);

console.log(...array3);  // Simpolified way to do the above code

console.log(' ');

console.log('End');