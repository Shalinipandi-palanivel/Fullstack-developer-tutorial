//sorting integers

const input = [39,400,10,4,300,250];

function sortInput(val){
    return val.sort(function(a,b){
        return a-b > 0 ? 1 : -1 ;
    });
}

console.log(sortInput([39,400,10,4,300,250]));

//sorting alphabets

const products = ['APPLE JUICE', 'MANGO JUICE', 'KIWI JUICE', 'GRAPE JUICE'];

function sortWords(string){
    return string.sort();
}

console.log(sortWords(products));