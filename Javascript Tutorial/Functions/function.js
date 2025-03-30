
//named function
function sum(a,b){
    return a+b;
}
console.log(sum(1,2));

//Before hoisting
// console.log(sum(1,2)); //o/p - 3
function sum(a,b){
    return a+b;
}

//After hoisting

function sum(a,b){
    return a+b;
}
// console.log(sum(1,2)); o/p - 3

//Anonymous function 
const sum = function(a,b){
    return a+b;
}

//Befor hoisting -> error -variable , should not call the function before initialization
//console.log(sum(1,2))
const sum = function(a,b){
    return a+b;
}

//After hoisting -> error - sum is not a function
var sum;
//console.log(sum(1,2))
sum = function(a,b){
    return a+b;
}


//Befor hoisting

var sum = 10;
function sum(a,b){
    return a+b;
}
//console.log(sum); o/p - 10

//After hoisting - this must be order of variable and function

var sum;
function sum(a,b){
    return a+b;
}

sum =10;
//console.log(sum); // o/p 10

var total;

total = function(a,b){
    return a+b;
}

function total(){
    return null;
}

console.log(total(1,2));