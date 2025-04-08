// ES6 features 
// - Map
// - Set
// - let/const
// - Declarative method - .forEach, .map, .set, .reuce
// - String literals
// - Rest operator
// - Arrow function
// - Spread operator
// - Default parameter
// - class

// Spread operator

const arr = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i'];
const firstRank = arr[0];
const secondRank = arr[1];
const thirdRank = arr[2];
const restClass = arr.splice(3);
// console.log(firstRank);
// console.log(secondRank);
// console.log(thirdRank);
// console.log(restClass);

const [first,second,thirdd,...rest]  = ['a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i'];
// console.log(first);
// console.log(second);
// console.log(rest);

//using spread operator we can concat two arrays
const a = [1,2,3,4];
// const b = a.slice();
const b = [...a] // concat using spread operator
// console.log(b);

//Spread operator in object

const  {address:{city,contact},info,experience,...restData} = {
    name: 'shalini',
    address: {
        city: 'Chennai',
        contact: 655456677, 
        doornum: 1/10 // gives error as it not defiined
    },
    info: 'seeking for job',
    experience:{
        first: 'Neeyamo',
        second: 'Aptean'
    },
    designation: 'Software developer'
};

// console.log(restData);
// console.log(city);
// console.log(info);
// console.log(contact);
// // console.log(doornum);
// console.log(experience);

// combine two arrays in function - default parameter

function combine(arr1,arr2){
    if(!arr1 && !arr2){
        return null;
    }
    if(!arr1){
        return arr2;
    }
    if(!arr2){
        return arr1;
    }
        return arr1.concat(arr2);
}


// console.log(combine([1,2,3],[4,3,6,2,7]));

function combinearr(arr1 =[], arr2=[]){
    return arr1.concat(arr2);
}

console.log(combinearr([1,2,3],[4,3,6,2,7]));
console.log(combinearr([4,3,6,2,7]));
console.log(combinearr([1,2,3],undefined));
console.log(combinearr());
