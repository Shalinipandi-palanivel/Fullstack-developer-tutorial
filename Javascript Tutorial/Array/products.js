/* Higher oredr functions
1 -  .map() -> loops and return array of same size
2 - .filter() -> loops  and return array with matching condition i.e subset of array
3 - .reduce() -> used transformation and accumulation of array
*/


const products = ['APPLE JUICE', 'MANGO JUICE', 'KIWI JUICE', 'GRAPE JUICE'];

// console.log(products.includes('KIWI JUICE'));
// console.log(products.indexOf('ORANGE JUICE')); // if the element in the list is not available , it gives -1
// console.log(products.indexOf('ORANGE JUICE')> -1); // to ovrcome the above scenario add > -1

function convertToLowerCase(products){
    const updatedProducts = []; //to not modify the original list , create a new array

    //usin for - imperative way of writing program
   for (var i = 0; i < products.length; i++){
     updatedProducts.push(products[i] = products[i].toLowerCase());
   }
   return updatedProducts;
}

// console.log(products);
// console.log(convertToLowerCase(products));

function convertToLowerCase(products){
    const updatedProducts = []; 

    // using forEach - declarative way of writing program\
    // forEach does not return anything
   products.forEach(function(Val, idx) {
     updatedProducts.push(Val.toLowerCase());
   });
   return updatedProducts;
}

//console.log(convertToLowerCase(products));

// map - gives the array of same length on which it is iterating

function convertToLowerCase(products){

    // using map - declarative way of writing program
   const newArr = products.map(function(Val, idx) { // map internally creates a new array
   // return idx; // for every iteration whatever the index, it will create the index
    return Val.toLowerCase(); // map return this
   });

   return newArr;
}
//console.log(convertToLowerCase(products));

// problem statement - double the value

const num = [1,2,3,4,5,6];

function doubleTheValue(num){
    return num.map(function(val,idx){
        return val*2;
    });  
}

//console.log(doubleTheValue(num));

// function doubleTheValue(num){
//     const ans = [];
//     num.forEach(function(val,idx){
//         ans.push(val*2);
//     });
//     return ans;
// }
// console.log(doubleTheValue(num));

//INPUT : [280,38,300,170,230,60,30]
//OUTPUT : [38,60,30]

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

// this map method gives undefined in this case

// function priceLessThan100(price){
//     const ans = price.map(function(val,idx){
//         if(val <= 100){
//             return val;
//         }
//     });
//     return ans;
// }
// console.log(priceLessThan100(price));

//filter method

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