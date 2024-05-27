"use strict";
console.log("<------------------------------start Assignemtn 1--------------------------------------->");
// define people object and empty array within object
let people = {
    friends: [],
};
// define friend1 object
let friend1 = {
    firstName: "Ali",
    lastName: "Hussain",
    id: 1
};
// define friend2 object
let friend2 = {
    firstName: "Ameen",
    lastName: "Gopang",
    id: 2
};
// define friend3 object
let friend3 = {
    firstName: "Sajjad",
    lastName: "Ali",
    id: 3
};
people.friends.push(friend1, friend2, friend3); // add objects to array of friends
console.log(people); // print student information
console.log("<------------------------------end Assignemtn 1--------------------------------------->");
console.log("<------------------------------start Assignemtn 2--------------------------------------->");
/*Assignment 2:Manipulating an Array: Rearranging Words
Objective:
Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
Steps:
1. Scrambled Array:
o Start with an array of elements in a scrambled order, like:
const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
• Modify the Array:
• Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
o Convert non-strings (booleans, numbers) to strings if needed.
o Split elements into character arrays (optional).
o Rearrange characters or elements in the desired order (modify original array or
create temporary arrays).
• Output the Result:
• Use join() to combine elements back into a single string: "I am a student of GIAIC".*/
const scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"]; // scrabled array list
let rearrangedArray = []; // new empty array
// rearrange element to array
rearrangedArray.push(scrambledArray[7]); // add 7th index element "I" to array
rearrangedArray.push(scrambledArray[4]); // add 4th index element "am" to array
rearrangedArray.push(scrambledArray[5]); // add 5th index element "a" to array
rearrangedArray.push(scrambledArray[0]); // add 0 index element "student" to array
rearrangedArray.push(scrambledArray[1]); // add 1st index element "of" to array
rearrangedArray.push(scrambledArray[6]); // add 6th index element "GIAIC" to array
console.log(rearrangedArray.join(" ")); // print rearranged sentance "I am a student of GIAIC"
console.log("<------------------------------end Assignemtn 2--------------------------------------->");
console.log("<------------------------------start Assignemtn 3--------------------------------------->");
/*Assignment 3: Company Product Catalog
Learning Objective: Implement data structures in TypeScript to represent and manage product
information.
Task: Create a program to represent a product catalog using an array and perform basic queries.
1. Define an array named inventory to store product information.
2. Create three separate objects, each representing a product, with properties like name,
model, cost, and quantity.
3. Add these product objects to the inventory array using an appropriate array method.
4. Access and log the quantity property of a specific product (e.g., third product) in the
inventory array.
5. Explore adding and accessing more elements within the inventory array to understand
how to manage product data.*/
// define array named inventory
let inventory = [];
// define object product1
let product1 = {
    name: "Laptop",
    model: 2024,
    price: 1200,
    quantity: 3
};
// define object product2
let product2 = {
    name: "Mobile",
    model: 2024,
    price: 1300,
    quantity: 3
};
// define object product3
let product3 = {
    name: "Bike",
    model: 2024,
    price: 1400,
    quantity: 3
};
inventory.push(product1, product2, product3); // add objects to the array using push method
console.log(inventory[2].quantity); //acess quantity from object3 and print
console.log(inventory[0].name); //acess name from object1 and print
console.log(inventory[1].price); //acess price from object2 and print
console.log("<------------------------------end Assignemtn 3--------------------------------------->");
console.log("<------------------------------start Assignemtn 4--------------------------------------->");
let students = [
    {
        name: "Ali",
        isSenior: true,
        hasCompletedAssignment: true
    },
    {
        name: "Ahmed",
        isSenior: false,
        hasCompletedAssignment: true
    },
    {
        name: "Alia",
        isSenior: true,
        hasCompletedAssignment: false
    },
    {
        name: "Zaman",
        isSenior: true,
        hasCompletedAssignment: false
    }
];
console.log(students); // print list of students
function findSeniorStudent(students) {
    return students.filter(student => student.isSenior == true && student.hasCompletedAssignment == true);
}
let senioList = findSeniorStudent(students);
console.log(senioList); // print senior students list who has completed assignment
function removeStudent(students) {
    return students.filter(student => student.isSenior == true && student.hasCompletedAssignment == false);
}
let removeList = removeStudent(students);
console.log(removeList); // print senior students list who has not completed assignment
console.log("<------------------------------end Assignemtn 4--------------------------------------->");
