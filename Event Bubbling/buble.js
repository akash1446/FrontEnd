var arr = [
    {
        image:"https://i.pinimg.com/736x/a7/d4/29/a7d4296cb1bfa4b2109c95b4826c0d88.jpg",
        username:"KLRahul",
        age:38,
        married:true,
        isstatus:"Stranger"
    },
     {
        image:"https://i.pinimg.com/1200x/a3/35/4b/a3354ba49ce6e386a30481a2e561a1af.jpg",
        username:"Rohit Sharam",
        age:20,
        married:true,
        isstatus:"Stranger"
    },
     {
        image:"https://i.pinimg.com/736x/2d/88/c3/2d88c3a056d83755407f0d34d8a13184.jpg",
        username:"Virat Kohli",
        age:26,
        married:true,
        isstatus:"Stranger"
    },
     {
        image:"https://i.pinimg.com/736x/c5/c4/68/c5c46870089084329d87d142caafed15.jpg",
        username:"Jadeja",
        age:28,
        married:true,
        isstatus:"Stranger"
    },
     {
        image:"https://i.pinimg.com/736x/eb/2f/1e/eb2f1eacf34ed092349d3fcd4b572820.jpg",
        username:"Kuludeep",
        age:23,
        married:true,
        isstatus:"Stranger"
    },
     {
        image:"https://i.pinimg.com/736x/4a/97/5c/4a975c2d4122cdf4a084a65325df18cb.jpg",
        username:"Jaiswal",
        age:24,
        married:false,
        isstatus:"Stranger"
    },
    
    {
        image:"https://i.pinimg.com/736x/fd/ef/3d/fdef3df1587f481f436e095b8d318561.jpg",
        username:"Dhoni",
        age:24,
        married:true,
        isstatus:"Stranger"
    },
    
]

function familyFunction(){


var sum = ' '

arr.forEach(function(e,idx){
       console.log(e,idx)
        sum = sum + `<div id="card">
        <img src=${e.image} alt="user">
        <h1>${e.username}</h1>
        <h5>${e.age}</h5>
        <h4>married:${e.married}</h4>
        <h3>${e.isstatus}</h3>
        <button id=${idx}>Add as a friend</button>
    </div>`
})

var main=document.querySelector('#main')
main.innerHTML=sum;
}

familyFunction()

main.addEventListener('click',function(dets) {
    var gold = arr[dets.target.id]
    console.log(gold);
    gold.isstatus='friends'
    familyFunction()
   

})
