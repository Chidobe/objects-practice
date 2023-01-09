// // // Create an empty object 'user'.
// let user = {};

// // Add the property 'name' with the value 'John'.
// user.name = "John";

// // Add the property 'surname' with the value 'Smith'.
// user.surname = "Smith";

// // Change the value of the 'name' to 'Pete'.
// user.name = "Pete";

// // Remove the property 'name' from the object.console
// delete user.name;



// //Write the function isEmpty(obj) which returns 'true' if the object has no properties, 'false' otherwise.
// let theObj = {};
// isEmpty(theObj);

// function isEmpty(obj) {
//     for (key in obj){
//         alert(false);
//         return;
//     } 
//     alert(true);

// };

// theObj.name = "Collins";
// isEmpty(theObj);



// //We have an object storing salaries of our team:
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// // Write the code to sum all salaries and store in the variable 'sum'. Should be 390 in the example above.
// let sum = 0;

// // If salaries is empty, then the result must be 0.

// for ( key in salaries){
    
//     sum += salaries[key];
//     // sum += sum.key;
    
// }
// alert(sum)
// isEmpty(salaries);



// //Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.
// //For instance:

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
//   name: { first: "john", surname: "doe", age: [14, 15]},
// };

// multiplyNumeric(menu);

// //Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
// //P.S. Use typeof to check for a number here.

// function multiplyNumeric(){
//     for (key in menu){
//         if (typeof menu[key] === "number"){
//             menu[key] = menu[key] * 2;
//         };
//     };
//     console.log(menu)
// };

// alert(menu.name.first)
// alert(menu.name.age[1])

// const myNickname = prompt("what is your nickname?", "none");
// const stats = "relationshipStatus";
// const relStatus = prompt("what is your relationship status?", "single");

// menu.name.nickname = myNickname;
// menu[stats] = relStatus;

// console.log(menu.name)
// console.log(menu)



// //Constructors
// //create your own objects
// function Bands(name, nationality, genre, members, formed, split, albums){
//     this.name = name;
//     this.nationality = nationality;
//     this.genre = genre;
//     this.members = members;
//     this.formed = formed;
//     this.split = split;
//     this.albums = albums;
// };


// const theJacksons = new Bands('The Jacksons', 'America', 'Pop', 5, 1974, true, [{name: 'Love me', released: 1980}, {name: 'Come Home', released: 1981}])

// console.log(theJacksons);


// // create a constructor function for staff biodata
//  function Staff(name, dateOfBirth, dept){
//     this.name = name;
//     this.dateOfBirth = dateOfBirth;
//     this.department = dept;
//  };

//  const newStaff = new Staff(prompt('What is your name?', 'First Surname'), prompt('What year were you born?', '1991'), "Dental" )
//  alert(newStaff)




// different ways of creating objects
//1 - literal
 let obj = {};
 obj.name = 'john';
 obj.age = 87;
 console.log(obj);

 let obj1 = {name : 'john', age : 67};

// 2 - new keyword
let obj2 = new Object();
obj2.name = "john";
obj2.age = 45;

//mutability of objects, any changes to 'o' will affect obj2
const o = obj2;
o.color = 'red';
console.log(obj2);

//converting an object to an array
const myArray = Object.values(obj)
console.log(myArray);

//converting an object to string
const myString = JSON.stringify(obj2);
console.log(myString);