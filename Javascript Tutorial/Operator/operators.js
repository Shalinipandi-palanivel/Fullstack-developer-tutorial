/* Arithmetic oerator
   Assignment operator
   Comparison operator/Comparison operator
   Boolean operator
   Ternary operator(?)
   Logical operator
   Type operator
   Bitwise operator
   */

//Arithmetic operator(+,-,*,**,/,%,++,--)

function discountpercent(mrp,finalprice){
    // var discount = Math.floor(((mrp-finalprice)*100)/mrp);
    // console.log(discount);
    return Math.floor(((mrp-finalprice)*100)/mrp); // withoust assigning variable 
}

// discountpercent(40,36);
//console.log(discountpercent(128,103));

//Assignment operator(=,+=,-=,*=,/=,%=)

function assign(){
    var a = 1;
    a+= 1; //a = a + 1;
    //console.log(a);
    a*= 2;
    //console.log(a);
    a**= 3;
    //console.log(a);
    a/= 2;
    //console.log(a);
    a%= 3;
    //console.log(a);
}

//assign();

// Comparison operator using boolean(== compares only boolean & value,=== compares both boolean value & datatype,<=,>=,!=,!==)

function compare(){
    console.log(false == 0);
    console.log(false === 0); 
    console.log('sun' != 'moon');
    console.log(1 !== '1'); 
}
//compare();

function climate(weather){
if(weather == 'rainy'){
    console.log('Take your umbrella');
}else {
    console.log("Leave it");
}
}

//climate('rainy');

//Boolean operator (true, false -> 0,null,undefined,'',false(followed in comparison operator))
 
//Ternary operator(?) 

/* syntax
 
         condition ? if true: if false;

 */

  function isGreaterThan5(val){
    return val > 5 ? 'Greater': 'Smaller';
  }

//   console.log(isGreaterThan5(6));
//   console.log(isGreaterThan5(5));
//   console.log(isGreaterThan5(4));

function isEven(num){
    return (num%2==0) ? 'Even' : 'Odd';
}

// console.log(isEven(3));
// console.log(isEven(8));
// console.log(isEven(2));

//Type operator(typeof , instanceof)

//typeof 

var a = function(){}
// console.log(typeof(a));
// console.log(typeof(1));
// console.log(typeof('shali'));
// console.log(typeof(true));
// console.log(typeof([]));
// console.log(typeof(null));
// console.log(typeof({}));

//instanceof 

// console.log([] instanceof Object);
// console.log(null instanceof Object);
//console.log({} instanceof Object); // throws error in browser console

//Logical operator(&& - gives falsy value,|| - gives truthy value,!)

console.log(1 && 2);
console.log('shalini' && null)
console.log(1 && 0 && 2);

console.log(1 || null);
console.log(undefined || true)
console.log('shalu' || 1 || 'string');
console.log(0 || false || undefined);







