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