// Queue

/* enqueue
dequeue
list 
size
*/

var ar = [1,2,3,4,5,6,7,8,9];

// function add(a){
//     ar.enqueue(a);
// }

// function remove(){
//     if(length > 0){
//         ar.dequeue();
//     }
// }

function length(){
    return ar.length;
}

function list(){
    return ar;
}

// add(5);
// add(9);
// add(8);
// remove();
// remove();
console.log(list());
console.log(length());