var  body=document.querySelector('body');
var  btn=document.querySelector('button');

var  imgurls =["https://i.pinimg.com/736x/f7/aa/91/f7aa91ec120e833804ec0d38eb7dfe87.jpg",
                "https://i.pinimg.com/736x/8a/8f/45/8a8f458820c84cc8e713456109f349a8.jpg",
                "https://i.pinimg.com/736x/c6/7d/53/c67d53b3af7c76fb264abcae985b1c48.jpg",
            ];

btn.addEventListener('click',function(){
    var  img=document.createElement('img');
    var  randomImage= imgurls[Math.floor(Math.random()*imgurls.length)];
   img.setAttribute('src', randomImage);
   img.style.height='200px';

   var maxX = window.innerWidth - 200;
   var maxY = window.innerHeight - 200;
   img.style.position='absolute';
   img.style.left = Math.floor(Math.random()*maxX) + 'px';
   img.style.top = Math.floor(Math.random()*maxY) + 'px';
   
   img.style.transform = `rotate(${Math.floor(Math.random() * 20) - 10}deg)`;
   body.appendChild(img);
   
});

