// var h = document.querySelector('h1');
// console.log(h);                    // select of the element

// h.innerHTML='hi guys facebook';  // changing Html

// h.style.color="violet";
// h.style.backgroundColor="green"; // changing css

// // Event Listener
// h.addEventListener('click',function(){
//     console.log("Hello guys");
// })


// var h1=document.querySelector('h1')
// h1.addEventListener('click',function(){
//     h1.innerHTML="hey guys how is the pratice of the Web developement"
//     h1.style.color='blue'
//     h1.style.backgroundColor='black'
//     console.log('hello girls happy womens day');
// })
  
// var h2 = document.querySelector('#heroine');
// console.log(h2)

// var h3 = document.querySelectorAll('h1');
// console.log(h3)

// var  h4 = document.getElementById('heroine');
// console.log(h4);

 /** @type {HTMLElement} */

// var box = document.querySelector('.mybox');
// var akashbtn = document.querySelector("#btn");

// btn.addEventListener('click',function(){
//     box.style.backgroundColor='yellow'; 
//     box.innerHTML="data"
    
// })

var btn = document.querySelector('button')
var h3 = document.querySelector('h3')

btn.addEventListener('click',function(){
    h3.innerHTML='Brother'
    h3.style.color='Green'
    btn.innerHTML='Remove Fan'
    
    
})

var check=0;
btn.addEventListener('click',function(){
    if(check===0){
    h3.innerHTML='Brother'
    h3.style.color='Green'
    btn.innerHTML='Remove Fan'
    check=1
    }
    else{
     h3.innerHTML='stranger'
    h3.style.color='Red'
    btn.innerHTML='Add Fan'
    check=0
    } 
})

var number = Math.random()
console.log(number)

var number = Math.random()*10
console.log(number)

var num = Math.random()*100
var num2=Math.floor(num)
console.log(num2);


