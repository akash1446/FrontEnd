var imgContainer = document.querySelector(".img-container")
var img =document.querySelector(".insta-img")
var heart = document.querySelector(".heart-icon")

imgContainer.addEventListener('dblclick',()=>{
     img.classList.add('zoom');
    heart.classList.add('show');
    setTimeout(()=>{
       img.classList.remove('zoom');
    heart.classList.remove('show');
        
    },2000)
})

