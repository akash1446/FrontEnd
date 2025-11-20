// // Functions
// function greet(){
//     console.log("Welcome To FLM jFS course");
// }
// greet();

// function greetUser(name){
//     console.log('Hello '+name+" How are You!")
// }
// greetUser('Krishna');

// //subtract function
// function sub(a,b){
//     return a-b;
// }
// let subtract=sub(20,10);
// console.log(subtract);


function bank(){
    console.log("Amount Of The Bank");
}
bank();

// Hoisting
var applecost=10;
console.log(applecost);

console.log(cost);
var cost=10;

function student(){
    //function statement
}

var value=function(){
    //function expression
    console.log("Hello");
}
value();

//Anynomous function
var arr=[2,3,4,5,6];
arr.forEach(function(){
    console.log(arr);
})

//fat arrow  functions  with one parameter
let letters =(a)=>{
    console.log(a);
}
letters("a,b,c")

// fat arrow  with implict return
function sum(){
    return 4+5;
}
sum();
var solution=sum();
console.log(solution);

// paramter passing of the function
function cricket(KLR,Roko){
    console.log(KLR,Roko);
}
cricket(90,100);


function cricket(KLR,Roko,gill){
    console.log(KLR,Roko,gill);
}
cricket(90,100);

// Rest operator
function marks(t,e,s,p,...rest){
    console.log(rest);

}
marks(90,100,60,50,80,70,40);

function subjects(t,e,s,p,...rest){
    console.log(t,e,s,p,...rest);

}
subjects(90,100,60,50,80,70,40);

//iife 
//immediately invoked function expression
(function project(){
    var a='234556'
    console.log(a);
})();