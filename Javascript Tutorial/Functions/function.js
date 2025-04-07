/* Functions
1. Named function and Anonymous function
2. Declaration of variable/function
3. pass by value and pass by reference
4. Arguments and Rest Operator
5. Hoisting
6. Higher Order Function
7. Arrow function
8. Closures
9. Function scoping
10. IIFE
*/

//Named function
function sum(a,b){
    return a+b;
}
//console.log(sum(1,2));

//Anonymous function
var sum1 = function(a,b){
    return a+b;
}
//console.log(sum1(4,9));

//Declaration
var sum3 = 10;
function sum3(a, b) {
    const total = a + b;
    return total;
}
//console.log(sum3); // output = 10

//Before hoisting
// console.log(sum(1,2));
function sum(c,d){
    return c+d;
}

//After hoisting
// function sum(c,d){
//     return c+d;
// }
// // console.log(sum(1,2)); - After hoisting console comes down

//Before hoisting
// console.log(sum(2,3));
var sum = function(e,f){
    return a+b;
}

//After hoisting
// var summ;
// //console.log(summ(2,3)); // gives error as summ is not a function
// summ = function(e,f){
//     return a+b;
// }

// Before hoisting
var sum4 = function (a, b) {
    const total = a + b;
    return total;
}

function sum4() {
    return null;
}

// console.log(sum4(1,2));

//After hoisting

// var sum4;
// function sum4() {
//     return null;
// }
// sum4 = function (a, b) {
//     const total = a + b;
//     return total;
// }
// console.log(sum4(1,2)); // pass by value

//pass by value and pass by reference

var a = [1,2,3];
var b = a;
a[0] = 10;
//console.log(a);

// use slice method to make the copy of 

var c = [1,2,3,4];
var d = a.slice();
d[0] = 20;
// console.log(c);
// console.log(d);

var data1 = [{
    id: 1,
    price: 200,
    title: 'Mango'
    },
    {
        id: 2,
        price: 300,
        title: 'Apple'
        },
        {
            id: 3,
            price: 500,
            title: 'Pomegranate'
            },
];

var data2 = {
    id:2,
    price: 300.25,
    title: 'Coconut'
};

function transformData(input){
    input.price = Math.round(input.price);
    return input;
}
// console.log(transformData(data2));
// console.log(data2);

function datatransform(data){
    return data.reduce(function(acc,datas){
        acc[datas.id] = datas;
        return acc;
    },{});
}

// console.log(datatransform(data1));

//Arguments
function arg(){ // we can give any number of arguments without passing arguments
    return Object.values(arguments).reduce(function(acc,val){
        acc+=val;
        return acc;
    },0)
}
// console.log(arg(1,2,3,4,5)); 

function sumargs(a, b, c=0, d=0, e=0) {
        console.log(Object.values(arguments));
        return a + b + c + d + e;
    }
// sumargs(); // returns empty array since reduce method return array

//Rest operator
function args(...args){
    return args.reduce(function(acc,val){
        acc+=val;
        return acc;
    },0)
}
// console.log(args(1,2,3,4,5));

//combine array using concat method
function args(...args){
    return args.reduce(function(acc,val){
        acc = acc.concat(val);
        return acc;
    },[])
}
// console.log(args([1,2,3,4,5],[7,8,0,4],[2,12,85,45,1,2]));

//Higher order function - passing function as an argument into other function
function args(...args){
    return args.reduce(function(acc,val){
        acc+=val;
        return acc;
    },0)
}

function higherOrderFunction(funct){
    return funct();
}
// console.log(args(1,2,3,4,5,6,7));


function Closure(a){
    return function(b){
        return a+b;
    }
}
// console.log(typeof Closure, Closure.name);
// console.log(Closure(1)); // output - [Function (anonymous)]
// const innerFn = Closure(1)
// console.log(innerFn(5));
// console.log(Closure(1)(2));

//Arrow function

var sum6 = function(a, b) {
    return a + b;
}
// console.log(sum6(8,9));

var sum7 = (a, b) => a + b;
// console.log(sum7(1,5));

//Closure - inner function can access the outer function whereas the outer function cannot access inner
function Closure(a){
    return function(b){
        return function(c){
        return a+b+c;
        }
    }
}

const innerFn = Closure(1)
// console.log(innerFn(5)(2));
// console.log(Closure(1)(2)(5));

function global(){
    g = 30;
    function outer(){ 
        o = 20; 
        function inner(){
             i = 10;
            console.log('inner>', g,o,i)
                        }
                        inner();
                     console.log('outer>',g,o)
                    }
                    outer();
                  console.log('global>',g)
                 }

//  global();

 function counter(){
    var count = 0;
    return function(){
        return count++;
    }
 }

 const runcounter = counter(); 
//  console.log(runcounter());
//  console.log(runcounter());
//  console.log(runcounter());
//  console.log(runcounter());
//  console.log(runcounter());

 // IIFE - functionstarts with () and execute the function then and there
var iife = (function() {
     return 6;
     })();
console.log(iife);
