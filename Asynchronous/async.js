// const a= 10;
// const b = 20;
// const c = 30;

// setTimeout(()=> console.log("Settime"));
// setTimeout(()=> console.log("Settime1"),0);
// setTimeout(()=> console.log("Settime2"),2000);
// setTimeout(()=> console.log("Settime3"),1000);

// // setInterval(() => console.log('Hi'),1000); // it executes the statement continuously after every sec mentioned 

// console.log(a);
// console.log(b);
// console.log(c);

// //Promise - new Promise((success, reject))
// const myPromise =  new Promise((success, reject) =>{
//     setTimeout(()=>success("Yes, I'm done"),3000);
//     setTimeout(()=>reject("No, failed"));
// });

// myPromise
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});

// const myPromise1 =  new Promise((success, reject) =>{
//     setTimeout(()=>{
//         IsReady  = [true,false][Math.floor(Math.random()*2)];
//         IsReady?success("Yes, ready"):reject("No, not ready") // Ternanry operator
//     },2000)
// });

// myPromise1
// .then((data)=>{console.log(data)})
// .catch((err)=>{console.log(err)});

//fetch doesn't work in node, try this in browser

// const fetchPromise = new Promise((success, reject)=>{
//     fetch("https://dummyjson.com/users/15/todos", {
//         method: "GET",
//         headers: {
//         "Content-Type": "application/json",
//         },
//     })
//     .then((res) => {
//         console.log(res);
//         if(res.status === 404){
//             return new Error("Endpoint doesnot exist");
//         }
//        return res.json()
//    })
//     .then((data) => success(data))
//     .catch((err) => reject(err));
//    })

// fetchPromise
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));


function randomNumberPromise(){
const randomNumber = new Promise((success,reject)=>{
    setTimeout(()=>{
        const randomNum = Math.floor(Math.random() * 10 + 1);
        // if (randomNum >= 5) {
        //     success(randomNum);
        //   } else {
        //     reject("Error generating number");
        //   }
        // }, 1000);
        (randomNum >= 5)?success(randomNum):reject("number not greater than 5"); //use Ternary operator instead of if-else
    },1000);
  });

  randomNumber
   .then((data) => {
    console.log(data);
})
   .catch((err) => console.log(err));
}

randomNumberPromise();
