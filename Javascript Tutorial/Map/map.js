//It has more advantages than array and object

/* It's a non-primitive datatype 
It is ordered
It can store anydatatype
Has the complexity of 1
Has size 
contains no unique values
*/

const myMap = new Map();

myMap.set(1, 'one in number');
myMap.set('1', 'one in string');

// console.log(myMap);

// console.log(myMap.get(1));
// console.log(myMap.get('1'));
// console.log(myMap.size);

myMap.set('name', ' Shaini');
myMap.set('address',{city : 'madurai', pincode : 625532});
//console.log(myMap.has('age'));
myMap.delete(1);
// console.log(myMap);
// console.log(myMap.keys());
// console.log(myMap.values());
// console.log(myMap.entries()); // gives object of arrays
// myMap.clear();
// console.log(myMap);

for(var x of myMap.entries()){
    //console.log(x);
   // console.log(x[0],x[1]);
}

myMap.forEach(function(val,key) {
    //console.log(val,key);
})

console.log(Array.from(myMap).map(function(val){
    return val; // gives entire value
    // return val[0]; // gives only key
    // return val[1]; //gives only value
}))
