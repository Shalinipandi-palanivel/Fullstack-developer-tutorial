//variables - global variable, local variable 

//it's a global scope variable as the variables are not mentioned before the variable "val" and can be accessed outside the function
//global- window object

function global(){
    val = 10;
    console.log(val);
}

// global();

// console.log(val);


/* variable - var, let, const */

//var - function scope

function print(){
    //Temporary dead zone
    console.log(a); //undefined
    var a = 20;
    console.log(a);
}

//print();

//console.log(a) // throws error as  variable - var is a function scope

// let - block scope 
// Temporary dead zone - let declaration is not hoisted to the function

function print() { 
     //Temporary dead zone
    //console.log(a); - throws error
    let a = 10;
    console.log(a);
}

//print();

//const - block scope,  and it is fixed value

function fixedvariable(){
   /* const c;
    c = 30; */ //throws error
    const c = 30; //declaration and intialisation should be in same line
    console.log(c);
}

fixedvariable();
