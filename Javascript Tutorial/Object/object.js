/*object - {key:value} 
key - unique identifier and it is always a string
value - can be of any datatype
*/

//objects are unordered

const product = {name:'Apple fruit - juice', 
    mrp: 113, 
    quantity: 1, 
    isAd: true,
    discountp: 19
};

// we can use both . and [] to access the individual data in the object

//console.log(product.name);
//console.log(product['price']);
console.log(Object.keys(product));
console.log(Object.values(product));

// to iterate through an array use 'of'
//to iterate through an object use 'in' - we will get keys in object

for (var x in product){
    console.log(x);
}

product['1'] = 'ONE';
//console.log(product);

product.price = 30;
//console.log(product);

// [] - allows to take any datatype  . - allows only string

product[1]='One in number';
//console.log(product);
// product.1 = 'one' // throws error

// can assign both key and vaulue as dynamic

var description = 'It is a juice';
var descriptionkey = 'product detail';

product[descriptionkey]=description;
//console.log(product);

var arr = [1,2,3] // coverts array as string in key object 
product[arr]= 'This is an array'
//console.log(product);

// try to make object as key object -> get key as [object object]

var c = {'key': 123};
product[c] = 'This is an object';
//console.log(product);

//function as key object

product.finalPrice = function(){
    console.log("It's a final price");
}

// console.log(product.finalPrice());

// console.log(product);

product.finalAmount = function(){
   // console.log("Final price: ", product.mrp, product.discountp);
    return Math.round(product.mrp - (product.mrp * (product.discountp/100)));
} 

//console.log(product.finalAmount());



