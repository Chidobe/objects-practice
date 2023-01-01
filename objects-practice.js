// Create an empty object 'user'.
let user = {};

// Add the property 'name' with the value 'John'.
user.name = "John";

// Add the property 'surname' with the value 'Smith'.
user.surname = "Smith";

// Change the value of the 'name' to 'Pete'.
user.name = "Pete";

// Remove the property 'name' from the object.console
delete user.name;


//Write the function isEmpty(obj) which returns 'true' if the object has no properties, 'false' otherwise.
let theObj = {};
isEmpty(theObj);

function isEmpty(obj) {
    for (key in obj){
        alert(false);
        return;
    } 
    alert(true);

};

theObj.name = "Collins";
isEmpty(theObj);



//We have an object storing salaries of our team:
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Write the code to sum all salaries and store in the variable 'sum'. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.

