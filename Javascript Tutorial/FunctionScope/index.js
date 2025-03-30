//closure function

//inner function can access the outer function whereas the outer function cannot access inner

function global(){
    g = 30;
    function outer(){ 
        o = 20; 
        function inner(){
             i = 10;
            console.log('inner>', g,o,i)
                        }
                        inner();
                     console.log('outer>',g,o)
                    }
                    outer();
                  console.log('global>',g)
                 }

 global();

//method

function sum(a,b){
    return a+b; // returns the value which we can print/console it later by assigning variable to methods
}

var total = sum(1,2);
console.log(total);

