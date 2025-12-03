// /** @type {HTMLElement} */

var arr = [
    {
        image:"https://i.pinimg.com/736x/79/22/3f/79223f6762fe10ca6c761f17eea9c529.jpg",
        username:"Mahesh Babu",
        age:38,
        married:true
    },
     {
        image:"https://i.pinimg.com/736x/35/ae/8d/35ae8dbaed682f3a3637419a3579a6e2.jpg",
        username:"Allu Arjun",
        age:20,
        married:true
    },
     {
        image:"https://i.pinimg.com/736x/19/4f/f4/194ff4255497ba92c8c5e2af50d6e037.jpg",
        username:"Hari",
        age:26,
        married:false
    },
     {
        image:"https://i.pinimg.com/1200x/e7/af/2f/e7af2f84d99ac44e582af27dff2c140a.jpg",
        username:"sai kumar",
        age:28,
        married:true
    },
     {
        image:"https://i.pinimg.com/1200x/5d/44/b3/5d44b3460c87b3bfa950cd868c0150a3.jpg",
        username:"Rashimika",
        age:23,
        married:false
    },
     {
        image:"https://i.pinimg.com/736x/ff/63/b2/ff63b233c69f702cbbedadaf137f4a5d.jpg",
        username:"N.T.R",
        age:24,
        married:true
    },
    
    {
        image:"https://i.pinimg.com/1200x/63/f9/f5/63f9f5764aa6d91ab5f6ffd492f50a0b.jpg",
        username:"Ritaka",
        age:24,
        married:true
    },
    
]
var sum = ''
arr.forEach(function(e){
        sum = sum + `<div id="card">
        <img src=${e.image} alt="user">
        <h2>${e.username}</h2>
        <h3>${e.age}</h3>
        <h5>married:${e.married}</h5>
    </div>`
})

console.log(sum);

var body=document.querySelector('body')
body.innerHTML=sum;
