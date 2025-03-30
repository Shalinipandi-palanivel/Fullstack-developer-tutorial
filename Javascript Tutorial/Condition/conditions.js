// // if-else, if- else if -else, switch

// // if-else

// function isEven(n){
//     if (n % 2 === 0){
//         return "Its' an even number"; 
//     } else {
//         return "It's an odd number";
//     }
// }

// //console.log(isEven(5));


// //if-else if - else

// function isEven(n){
//     if (n < 0){
//         return "It's a negative number";
//     } else if (n % 2 === 0) {
//         return "Its' an even number"; 
//     } else {
//         return "It's an odd number";
//     }
//  }

//console.log(isEven(-5));

//switch

// function isEven(n){
//     switch(n){
//         case 1:
//         case 3:{
//             return 'ODD';
//         }
//         case 2:
//         case 4:{
//             return 'EVEN'
//         } default : {
//             return "It's a negative number";
//         }
//     }
// }
// console.log(isEven(2));

// break /return in every case

function isEven(n){
    switch(n){
        case 1:
        case 3:{
            console.log('ODD')
            break;
        }
        case 2:
        case 4:{
            console.log('EVEN')
            break;
        } 
        default : {
           console.log("It's a negative number");
        }
    }
}
isEven(-5);