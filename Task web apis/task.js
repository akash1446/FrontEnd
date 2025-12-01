var progressBar = document.getElementById('.progress');
var btn = document.querySelector('#btn');
var status = document.getElementById('#status');

let progress = 0;
let interval;
btn.addEventListener('click',() =>{
    if(interval) return;

    progress = 0;
    progressBar.style.width = '0%';
    status.textContent = 'Downloading.....';
    interval = setInterval(()=>{
        progress += Math.random()*10;
        if(progress >=100){
            progress=100;
            clearInterval(interval);
            interval = null;
            status.textContent = 'Complete of the Song?';
        }
        progressBar.style.width = progress + '%';
    },300);
});
