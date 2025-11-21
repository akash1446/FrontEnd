var h = document.querySelector('h1');
console.log(h);                    // select of the element

h.innerHTML='hi guys facebook';  // changing Html

h.style.color="violet";
h.style.backgroundColor="green"; // changing css

// Event Listener
h.addEventListener('click',function(){
    console.log("Hello guys");
})


var h1=document.querySelector('h1')
h1.addEventListener('click',function(){
    h1.innerHTML="hey guys how is the pratice of the Web developement"
    h1.style.color='blue'
    h1.style.backgroundColor='black'
    console.log('hello girls happy womens day');
})

var h2 = document.querySelector('#heroine');
console.log(h2)

var h3 = document.querySelectorAll('h1');
console.log(h3)

var  h4 = document.getElementById('heroine');
console.log(h4);

var box = document.querySelector('.mybox');
var akashbtn = document.querySelector("#btn");

btn.addEventListener('click',function(){
    box.style.backgroundColor='yellow'; 
     console.log(box);
})
