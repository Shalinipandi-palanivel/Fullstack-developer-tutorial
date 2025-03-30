/*
add
remove
list
size
*/

var arr = [1,2,3,4,5,6,7];

function add(a){
    arr.push(a);
}

function remove(){
    if(length() > 0){
    arr.pop();
    }
}

function list(){
    return arr;
}

function length(){
    return arr.length;
}

add(5);
add(9);
add(8);
remove();
remove();
console.log(list());
console.log(length());

