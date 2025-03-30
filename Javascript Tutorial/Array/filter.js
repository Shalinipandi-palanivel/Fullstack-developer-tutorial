/* Higher oredr functions
1 -  .map() -> loops and return array of same size
2 - .filter() -> loops  and return array with matching condition i.e subset of array
3 - .reduce() -> used transformation and accumulation of array
*/

const price = [280,38,300,170,230,60,30];

// function priceLessThan100(price){
//     const arr = [];
//     price.forEach(function(val,idx){
//         if(val <= 100){
//             arr.push(val);
//         }
//     });
//     return arr;
// }
// console.log(priceLessThan100(price));

function priceLessThan100(price){
    return price.filter(function(val,idx){
        return val <= 100;
    });
}

// console.log(priceLessThan100(price));

// Get even nos.

const number = [,1,2,3,4,5,6,7,8];

function evenNumber(num){
    return num.filter(function(val,idx){
        return val % 2 === 0;
    });

}

console.log(evenNumber(number));