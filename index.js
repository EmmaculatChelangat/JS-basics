// console.log("hello world");

// let name ="Emma";
// console.log(name);

// variables are containers that store data temporarily

// variable names
// cannot be reserved keywords
// should be meaningful n descriptive
// cannot start with a number (1name)
// cannot contain a space or hyphen(-)
// use camel notation in joined words
// they are case sensitive


// let firstName="Kaku", lastName = "Jill";
// let firstName="Kaku";
// let lastName = "Jill";


// constants
const interestRate = 0.3;
// interestRate = 1; //gives an error
console.log(interestRate)

// primitive types
// strings, numbers, undefined , null, boolean
let name = "Emma"; //string literal
let age = 21 //number literal
let isApproved = true; //boolean literal
let firstName; //undefined
let lastName = undefined; //undefined
let selectedColor = null; //null-clear value of a variable

//reference types
// object array and function
//object-
let person ={
    name: "Emma",
    age: 30
};

// dot notation
person.name= "John"
// bracket notation
// person['name']='Mary';

let selection ='name'
person[selection] ='Vicky'


console.log(person.name);

// arrays-ds use to rep list of items
let selectedColors = ['red','blue'];
selectedColors[2]='green';
// console.log(selectedColors);
// console.log(selectedColors[1]);
console.log(selectedColors.length);


// functions
// function greet(){
//     console.log("hello sweetie");
// }
// greet();


// function isset of statements that either perform a task or calculate a  value

// function performing a task
function greet(name, lastName){
    console.log("hello "+ name +' '+lastName);
}
greet('John', 'Smith');
greet('Bro', 'Vinny');

// calculating a  value
function square(number) {
    return number * number;
}
// let number = square(2);
console.log(square(2));


