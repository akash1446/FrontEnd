//Ansynchronous and Synchronous JavaScript
console.log('Hello World');
setTimeout(function(){
    console.log('hello1');
},1000);

console.log('Hi')
setTimeout(()=>{
    console.log('Python');
},200);

console.log('JavaScript');

//Example
console.log('number of the books');
setTimeout(()=>{
    console.log('seven books');
},0);
Promise.resolve().then(function(){
    console.log('reading of the books');
});
console.log('Go to The Library');

function fetchData(){
    Data()
    fetchData(function(){
        console.log('Data fetched in the system');
    });
}

function bankDetails(){
    setTimeout(()=>{
        console.log('Bank details fetched of the manger');
    },1000);
    setTimeout(function(){
          console.log('Employee details also fetched');
    },2000);
    setTimeout(()=>{
       console.log('Customer details fetched');
    },3000);
}
bankDetails('Vasu',function(){
    console.log('Details sucessfully fetched of the Vasu');
});