var h = document.querySelector("h1")
var btn = document.querySelector("button")

btn.addEventListener('click',function(){
    h.innerHTML ="Bye friends";
    h.style.backgroundColor ="blue"
})



var arr = [20,30,40,50,60,70]
console.log(arr);

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

var string = [1,'hi',50,'true','ajay']
string.forEach(function(e,i){
    console.log(e,i);
})

var arr = [
    {
        username:"Fayaz",
        age:25,
        married:false
    },
     {
        username:"vasu",
        age:20,
        married:false
    },
     {
        username:"Hari",
        age:26,
        married:false
    },
     {
        username:"sai kumar",
        age:28,
        married:true
    },
     {
        username:"Arun",
        age:23,
        married:false
    },
     {
        username:"Tejesh",
        age:24,
        married:false
    },
    
]

arr.forEach(function(a){
      console.log(a)
})

var sum=0
arr.forEach(function(b){
    sum = sum + b.age;

})
console.log(sum);

