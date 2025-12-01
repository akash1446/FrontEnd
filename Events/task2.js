/** @type {HTMLElement} */
var cursor = document.querySelector('.custom-cursor');
console.log(cursor);
cursor.addEventListener('mouseenter',e => {
    cursor.style.left = e.clienta + 'px';
    cursor.style.top=e.clientb +'px';
    console.log("Enter of the cursor");
})

var cursor = document.querySelector('.custom-cursor');
console.log(cursor);
cursor.addEventListener('mouseleave',e=>{
    cursor.style.left  = e.clienta +'px';
    cursor.style.top = e.clientb +'px';
    console.log("leave of the cursor");
})

