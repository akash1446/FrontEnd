// var WTC = ['IND','SA','ENG','AUS','BAN','PAK','NZ']


// var btn=document.querySelector('button');
// var h1 = document.querySelector('h1');

// btn.addEventListener('click', function(){
//     let teams= Math.floor(Math.random()*WTC.length);
//     let trophy = WTC[teams];
//     console.log(trophy)
//      h1.innerHTML=trophy;
// })

//Web Apis
//set interval
//set timeout
console.log('hello1');
setTimeout(function(){
   console.log('hello2');
},5000)
setTimeout(function(){
console.log('hello3');
},2000)

var btn = document.querySelector('button')
var h5 = document.querySelector('h5')

btn.addEventListener('click',function(){
    h5.innerHTML='request sending';
    h5.style.color='blue';
    setTimeout(function(){    
       h5.innerHTML='Brother'
       h5.style.color='Green'
       btn.innerHTML='Remove student'
    },6000)

})
//set interval
 setInterval(function(){
    console.log('Hi HR');
 },2000)

