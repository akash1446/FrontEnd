
/** @type {HTMLElement} */

var btn=document.querySelector('.btn');
var h3=document.querySelector('h3');

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
var clc = document.querySelector('.clc');
var box = document.querySelector('.box');



clc.addEventListener('click', function(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    var a=Math.floor(Math.random()*256)
    box.style.backgroundColor= `rgb(${r}, ${g}, ${b}, ${a})`;

})