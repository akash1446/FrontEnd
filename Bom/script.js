var btn  = document.querySelector('button')
btn.addEventListener('click',function(){
     location.href='https://www.frontlinesedutech.com/s/mycourses'
     location.reload()
})

var btn1 = document.querySelector('.btn1')
var btn2 = document.querySelector('#btn2')

btn1.addEventListener('click',function(){
    history.back();
})
btn2.addEventListener('click',function(){
    history.forward();
})

console.log(navigator.onLine);
console.log(navigator.userAgent)

localStorage.setItem('user','vasu');
localStorage.setItem('age',25);

var user = localStorage.getItem('user');
console.log(user)

localStorage.removeItem('age');

sessionStorage.setItem('user','Baskar');
sessionStorage.setItem('age',39);

sessionStorage.removeItem('user');