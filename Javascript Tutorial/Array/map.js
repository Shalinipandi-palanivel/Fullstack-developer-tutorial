/* Higher oredr functions
1 -  .map() -> loops and return array of same size
2 - .filter() -> loops  and return array with matching condition i.e subset of array
3 - .reduce() -> used transformation and accumulation of array
*/

const num = [1,2,3,4,5,6];

// function doubleTheValue(num){
//     const ans = [];
//     num.forEach(function(val,idx){
//         ans.push(val*2);
//     });
//     return ans;
// }
// console.log(doubleTheValue(num));

function doubleTheValue(num){
    return num.map(function(val,idx){
        return val*2;
    });  
}

console.log(doubleTheValue(num));