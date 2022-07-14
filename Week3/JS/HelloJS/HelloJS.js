console.log("==================================================(Printing and Declaring Variables)")

//console.log() will print to the webpage CONSOLE, not the actual webpage
console.log("Hello JavaScript, Please be nice to us...")

//no need for semicolons in JS! They're added implicity. But I like them for readability.

//JS is loosely typed, so I can easily change the data type of a variable
var a = 100; //number type
a = true; //now a boolean
a = null;
a = "Now I'm a String!";

//JS will add the "var" keyword implicity when declaring a variable
b = "I wasn't provided with a variable declaration, but JS does it for me";

console.log("================================================(Testing Type Coercion)")

var tc1 = "5" * 5; 
console.log("string times number is: " + typeof tc1); //tc1 is a number 

var tc2 = "5" * "5";
console.log("string times string is: " + typeof tc2); //tc2 is a number

var tc3 = 5 + "5";
console.log("number plus string is: " + typeof tc3); //tc3 is a string

var tc4 = "5" + 5;
console.log("string plus number is: " + typeof tc4); //tc4 is a string

//order doesn't matter if there are only two variables

//where order tends to matter is when we have multiple operators

var tc5 = 5 + 5 + "5";
console.log(tc5) //105 (10 + 5) 
console.log("num plus num plus string is: " + typeof tc5)

var tc6 = 5 + "5" + 5;
console.log(tc6) //555 (5 + 5 + 5)
console.log("num plus string plus num is: " + typeof tc6)

var tc7 = "5" + 5 + 5;
console.log(tc7) //555 (5 + 5 + 5)
console.log("string plus num plus num is: " + typeof tc7)

//"It's all math UNTIL a String gets put in the mix"

console.log("======================================(Truthy/Falsy")

