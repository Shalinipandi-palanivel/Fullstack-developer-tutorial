//Array of object

const product = [{name:'Apple fruit - juice', 
    mrp: 113, 
    quantity: 1, 
    isAd: true,
    discountp: 19
},
{name:'Banana fruit - juice', 
    mrp: 100, 
    quantity: 2, 
    isAd: true,
    discountp: 20
},
{name:'Orange fruit - juice', 
    mrp: 200, 
    quantity: 1, 
    isAd: true,
    discountp: 15
},
{name:'Grape fruit - juice', 
    mrp: 123, 
    quantity: 1, 
    isAd: true,
    discountp: 19
},{name:'Kiwi Fruit - juice', 
    mrp: 180, 
    quantity: 3, 
    isAd: true,
    discountp: 30
}];

//console.log(product[0]);


//console.log(product[0].mrp);

//get the quantity of the product - map

// function getProductQuantity(data){
//     return data.map(function(val){
//         return val.quantity;
//     });
// }

//console.log(getProductQuantity(product));

//get the cart - reduce

function getCartValue(data){
    return data.reduce(function(acc, product){
        const discountPrice = product.mrp * (product.discountp/100);
        const productTotalPrice = product.quantity * Math.round(product.mrp - (discountPrice));
        return acc += productTotalPrice;
    },0);
}

//console.log(getCartValue(product));

// Transform into {productname: { productobjct details } using reduce

/*
var object = {
Apple fruit - juice: {
name:'Apple fruit - juice', 
    mrp: 113, 
    quantity: 1, 
    isAd: true,
    discountp: 19
}
};
*/

function productObject(data){
    return data.reduce(function(acc,product){
        acc[product.name] = product;
        return acc;
    },{}); 
}

console.log(productObject(product));