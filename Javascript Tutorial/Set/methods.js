// by default set is atored as an object , to change frm object to array use Array.from()


const arr1 = [1,2,3,4]
const arr2 = [2,3,4,5,6,7,8,];

// concat

function getStudentsList(list1,list2){
    return Array.from(new Set(list1.concat(list2)));
}

//console.log(getStudentsList(arr1,arr2));

//another method to concat

function getStudentsList1(list1,list2){
    const mySet = new Set();

    arr1.forEach(function(val){
        mySet.add(val);
    })

    arr2.forEach(function(val){
        mySet.add(val);
    })
    return Array.from(mySet);
}

console.log(getStudentsList1(arr1,arr2));