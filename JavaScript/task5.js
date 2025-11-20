// create a function that takes another function as an argument and call after three seconds
function argument(fn){
    setTimeout(fn,3000);
}
argument(function(){
    console.log("hi welcome to react.js")
});

// write a function that uses closures to create a counter.
function counter(){
    let count = 1;
    return function(){
        count++;
        console.log(count);
    }
}
var fn=counter();
fn();
fn();
fn();
fn();

// limit the function call to 4
function fnlimiter(fn,limit){
    let flag=0;
    return function(){
        if(flag<limit){
            flag++;
            fn();
        }
    }
}
var l = fnlimiter(function(){
    console.log("Hi hello");
},4)
l();
l();
l();
l();
l();

//create a function that takes a callback  and executes it after every n  seconds infinetely
function executes(fn,time){
    setInterval(fn,time);
}
executes(function(){
    console.log("bye friends");
});

// implement a function that takes a callback and only executes it once
function fnlimiter(fn,limit){
    let flag=0;
       return function(){
        if(flag<limit){
            flag++;
            fn();
        }
    }
}
var l = fnlimiter(function(){
    console.log("Hello world");
},1)
l();