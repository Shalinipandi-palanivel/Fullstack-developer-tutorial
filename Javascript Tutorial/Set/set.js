const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(1);
mySet.add(3);
mySet.add(2);
mySet.add(4);

// console.log(mySet);
// console.log(mySet.has(2));
//mySet.delete(1);
// console.log(mySet);
// console.log(mySet.size);
// console.log(mySet.values());
//mySet.clear();
//console.log(mySet);

for(var x of mySet.values()){
    console.log(x);
}

mySet.forEach(function(val){
    console.log(val);
    
})

console.log(Array.from(mySet).map(function(val,idx){
    return val;
}))