// list of different datatype

//Array methods 

var a = [1,2,3,4] // intialise an array
// console.log(a);
// console.log(a[2]);
// a[1] = 10;
// console.log(a);
// console.log(a.length);
// console.log(a[a.length-1]);

a.push('FIVE', 'SIX', 7,8); // add element at last
//console.log(a);

a.pop();
//console.log(a); //removes element at last

a.unshift(0,'ONE'); // add element at first
//console.log(a); 

a.shift(); //removes element at first
//console.log(a);

delete a[3]; //only removes the value not the index
//console.log(a);

// console.log(a.splice(5,2)); // splice removes both value and index
// console.log(a);

 //console.log(a.includes('FIVE'));

//console.log(a.reverse());

//console.log(a.join(' ')); // array to string , without (' ') it joins using ,

b = [ 8,9,0,4,1,2,3,4,6];
//console.log(a.concat(b));
//console.log([...a,...b]); // spread operator to join two arrays

var c = b.slice(); // slice method doesn't change the original value, creates new array

b[1] = 6;
//console.log (b);

//console.log(c);

var d = b.slice(1,5)
//console.log(d);


// to make the array empty by own , not expecting the garbage collector to empty the array as it takes certain interval of time to empty it

e = [4,5,6,7,8];
e = [];
e.length = 0;
//console.log(e);

var nam = 'Shalini pandi';
// console.log(nam.split(' ').join('_'));

function username(name){
    return name.split(' ').join('_').toLowerCase();
 }

 console.log(username(nam));