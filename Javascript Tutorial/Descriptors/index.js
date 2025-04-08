// Objects contains more properties/descriptors by default.
//Descriptors
// - Configurable: Boolean
// - Enumerable: Boolean // we cannot access the value when we iterate through the object if we set enumerable: false;
// - Value: Any
// - Writable: Boolean

const obj1 = {name: 'shalini'};
// console.log(obj1);
// console.log(Object.getOwnPropertyDescriptors(obj1));
//   output-{
//         name: {
//           value: 'shalini',
//           writable: true,
//           enumerable: true,
//           configurable: true
//       }
//    } 

const obj2 =  {name: 'shalini'};
const obj = Object.freeze(obj2); // we cannot override the value of name
// console.log(Object.getOwnPropertyDescriptors(obj));
// output - {
//     name: {
//       value: 'shalini',
//       writable: false,
//       enumerable: true,
//       configurable: false
//     }
//   }

//we can also define the property by our own using definePropert(), by default all the properties are true

const obj3 = {name: 'dhanush'}
Object.defineProperty(obj3,'city',{
    value: 'chennai',
    writable: true,
    enumerable: true,
    configurable: true
    
});
Object.defineProperty(obj3,'salary',{
    value: 20000,
    writable: true,
    enumerable: false, // cannot access the value when we iterate through the object
    configurable: true
    
});

// console.log(obj3.salary);
// for(var key in obj3){
//     console.log(key);
// }

const desc = Object.getOwnPropertyDescriptors(obj3);
// console.log(desc);

Object.defineProperty(obj3,'surname',{
    value: 'aditya',
    writable: false, // we cannot change the value but can delete it
    enumerable: true, 
    configurable: true
    
});

// console.log(obj3.surname);
// obj3.surname = 'Aditya'
// console.log(obj3.surname);
// console.log(delete obj3.surname);

Object.defineProperty(obj3, 'empId',{
    value: 1204,
    writable: true, // we cannot change the value but can delete it
    enumerable: true, 
    configurable: false //we can change the value, but cannot delete the value
    
});

console.log(obj3.empId);
obj3.empId = 2345;
console.log(obj3.empId);
console.log(delete obj3.empId);

//To make the value immutable and not to delete, make enumerable and configurable false
Object.defineProperty(obj3, 'dob',{
    value: 2020,
    writable: fase, // we cannot change the value but can delete it
    enumerable: true, 
    configurable: false //we can change the value, but cannot delete the value
    
});
