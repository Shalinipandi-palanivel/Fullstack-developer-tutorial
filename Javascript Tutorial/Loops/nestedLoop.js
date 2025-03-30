function innerLoop(){
     var str = " ";
    for (i = 0; i <= 5; i++ ){
       var str = '*';
    }
    console.log(str);
}
// innerLoop(); 

function outerLoop(){
    for(var outer = 0; outer <= 5; outer++){
        innerLoop();
    }
}

//outerLoop();

/*
*
**
***
****
*****
******
*/

function ascLoop(){
    var str = '';
    for (var outer = 0; outer <=5; outer++){
        for(var inner = 0; inner < outer+1; inner++){
            str += "*"
        }
        str += '\n';
    }
    console.log(str);
}
//ascLoop();

/*
*****
****
***
**
*
*/

function desLoop(){
    var str = '';
    for (var outer = 0; outer <= 5; outer++){
        for (var inner = 5 - outer; inner > 0; inner--){
            str += '*'
        }
        str += '\n';
    }
    console.log(str);
}
//desLoop();

function backLoop(){
    var str = '';
    for (var outer = 1; outer <= 5; outer++){
        for (var inner = 1; inner <= 5; inner++){
            if (inner <= 5 - outer){
                str += ' ';
            }
                else {
                    str += '*'
                }
            }
            str += '\n';
        }
        console.log(str);
    }

    backLoop();
