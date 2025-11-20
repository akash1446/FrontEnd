//Higher  Order Function
function ram(){
    return function(){
        console.log("Hi");
    }
}
console.log(ram()());

function grow(){
    return function(){
        return function(){
            console.log("hey");
        }
    }
}
grow()()();

//case2
function abcd(fnc){
    fnc();
}
abcd(function(){
    console.log("hello world");

})

function add(a){
    console.log(a);
    a();
}
add(function(){
     console.log("What are you doing");
})

//callback function
// Example
function rahul(cricket){
     cricket();
}
rahul(function(){
    console.log(90)
})

//pure function
//function  without any side  effects.
//Example
function sub(a,b){
    return a-b;
}
console.log(sub(3,4));

//Impure functions
let total=0;
function multotal(a){
    total = total * a;
}
multotal(7);
console.log(total);

//global scope
//local scope

//first class function
var a=72
var a= function(){
    console.log(a);
}

//maps
var arr=[2,3,4,5,7]
arr.map(function(value){
    return 1;
})
console.log(arr);
arr.forEach(function(value){
    console.log(value);
})

//closure function
function abc(){
    var a=13;
    return function(){
        console.log(a);
    }
}
abc()();