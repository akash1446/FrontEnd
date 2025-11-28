// var  h =document.querySelector('h1');
// var att= h.getAttribute('id');
// console.log(att);

//get Attribute
var img = document.querySelector('#img1')
var att = img.getAttribute('src')
console.log(att);


//set Attribute and get Attribute
var img1=document.querySelector('#img1');
var img2=document.querySelector('#img2');

var btn=document.querySelector('button');
btn.addEventListener('click',function(){
    var img1src=img1.getAttribute('src');
    var img2src=img2.getAttribute('src');
    console.log(img1src);
    console.log(img2src);
    img1.setAttribute('src',img2src);
    img2.setAttribute('src',img1src);
})

//create an element
var h=document.createElement('h1');
console.log(h);
h.innerHTML="hi guys"


var body=document.querySelector('body');
var btn1=document.querySelector('.btn');
btn1.addEventListener('click',function(){
    var  img=document.createElement('img')
   img.setAttribute('src',"https://i.pinimg.com/736x/8a/8f/45/8a8f458820c84cc8e713456109f349a8.jpg")
   img.style.height='200px';
   body.appendChild(img);
})


