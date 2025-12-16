//Ansynchronous and Synchronous JavaScript
// console.log('Hello World');
// setTimeout(function(){
//     console.log('hello1');
// },1000);

// console.log('Hi')
// setTimeout(()=>{
//     console.log('Python');
// },200);

// console.log('JavaScript');

// //Example
// console.log('number of the books');
// setTimeout(()=>{
//     console.log('seven books');
// },0);
// Promise.resolve().then(function(){
//     console.log('reading of the books');
// });
// console.log('Go to The Library');

// function fetchData(){
//     Data()
//     fetchData(function(){
//         console.log('Data fetched in the system');
//     });
// }

// function bankDetails(){
//     setTimeout(()=>{
//         console.log('Bank details fetched of the manger');
//     },1000);
//     setTimeout(function(){
//           console.log('Employee details also fetched');
//     },2000);
//     setTimeout(()=>{
//        console.log('Customer details fetched');
//     },3000);
// }
// bankDetails('Vasu',function(){
//     console.log('Details sucessfully fetched of the Vasu');
// });



// //call back Hell task
// function step1(cb){
//     console.log("select the product")
//     cb();
// }
// function step2(cb){
//     console.log("add my details")
//     cb();
// }
// function step3(cb){
//     console.log("Order the products")
//     cb();
// }

// function step4(cb){
//     console.log("Make the Payment")
//     cb();
// }
// function step5(cb){
//     console.log("delivery of the products")
//     cb();
// }
// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             step4(()=>{
//                 step5(()=>{
//             console.log("All steps are completed");
//                 })
//         })
//         })
//     })
// })

// //promise example
// new Promise((res,rej)=>{
//     console.log('fetch user data');
//     console.log('loading user data.....')
//     console.log('user data loaded in memory')
//     res();
// })
// .then(function(){
//     console.log('resolved');
// })
// .catch(function(){
//     console.log('rejected');
// })
// function stepone(){
//     return new Promise(function(res,rej){
//         console.log('step 1 is completed');
//         res();
//     })
// }
// function steptwo(){
//     return new Promise(function(res,rej){
//         console.log('step 2 is completed');
//         res();
//     })
// }
// function stepthree(){
//     return new Promise(function(res,rej){
//         console.log('step 3 is completed');
//         res();
//     })
// }
// function stepfour(){
//     return new Promise(function(res,rej){
//         console.log('step 4 is completed');
//         res();
//     })
// }
// stepone()
// .then(steptwo)
// .then(stepthree)
// .then(stepfour)
// .then(function(){
//     console.log("all steps are completed using promise");
// })

// fetch Api

fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>{return res.json()})
.then(function(data){
    console.log(data);
})


function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({name:"vasu",url:"https://jsonplaceholder.typicode.com/users"});
        },3000)

    })

}

//async await
async function getfetchData(){
    try{
        console.log('fetching of the user data');
        const userData =await fetchData();
        console.log("user data fetched successfully");
        console.log("fetchData:",fetchData);
}
 catch(error){
    console.log("error occured data not fetched");
 }   
}
getfetchData();


function fetchpostData(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve("post data is fetched success fully");
      },3000)
    })
}
function fetchcommentData(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("comment data is fectched successfully");
        },2000)
    })
}

async function getblogData(){
    try{
        console.log("fetching of the blog data");
        const blogData = await fetchpostData();
        const commentData = await fetchcommentData();
        console.log('fetch completed')
    }
    catch(error){
        console.error("error fetching data");
    }
}
getblogData();

//promise All
const data = await Promise.all([fetchpostData(),fetchcommentData])
console.log(data)
console.log("fetch is completed");