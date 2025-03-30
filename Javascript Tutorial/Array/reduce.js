/* Higher oredr functions
1 -  .map() -> loops and return array of same size
2 - .filter() -> loops  and return array with matching condition i.e subset of array
3 - .reduce() -> used transformation and accumulation of array
*/

const value = [100,30,46,28,300,25];

// function sumOfValues(value){
//     var sum = 0;
//     value.forEach(function(val,idx){
//         sum += val;        
//     });
//     return sum;
// }

// console.log(sumOfValues(value));

//reduce method

// function sumOfValues(value){

//     return value.reduce(function(acc, val){
//         if(typeOf val === 'number'){
//             acc += val;
//         }
//         return acc;
//       },0);
// }

//console.log(sumOfValues(value));

// function maxValue(value){
//     return value.reduce(function(acc,val){
//         return Math.max(acc,val);
//     },0);
// }

//console.log(maxValue(value));

const data = ['Ashwin','Dhanush', 'Ashwini','Dhanvi','Pradeep', 'Ajitha','Shalini'];

function getNameSort(data){
    return data.reduce(function(acc,val){
        if(val.startsWith('A')){
            acc.push(val.toUpperCase());    
        }
        return acc;
    },[]);
}

console.log(getNameSort(data));