//string 

var str = 'Hello World';
// console.log(str.charAt(3));
// console.log(str.charAt(6));
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.length); // length is a property not a function so () is not used
// console.log(str.charAt(str.length - 1));
//  var a = '    shalini   '
//  console.log(a.trim()); 
// console.log('shalini'.concat('pandi'));
var a = 'Shalini pandi';
// console.log(a.replaceAll(' ','_').toLowerCase());
// console.log(a.split(' ')) // returns an array
// console.log(a.split(' ').join('_').toLowerCase()); // join method on top of array gie string
//join is not a function on top of string

function compareEmail(storedEmail, userInputEmail){
    return storedEmail.trim().toLowerCase() === userInputEmail.trim().toLowerCase();
}

console.log(compareEmail('shalini@gmail.com' , ' Shalini@gmail.Com'));


var nam = 'shalini pandi';
console.log(nam.slice(0,3));//it creates copies of the given portion in terms of array
console.log(nam. substring(1,6));
console.log(nam. search('p'));
console.log(nam. includes('pan')); // gives boolean value
console.log(nam. startsWith('s'));
console.log(nam. endsWith('f'));
console.log(nam. substring(1,6));
console.log(nam.replace('i','a'));
console.log(nam. indexOf('l'));




