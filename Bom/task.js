var arr = [
    {
        image:"https://i.pinimg.com/736x/dc/10/aa/dc10aafc68d384622f59edb3919a924d.jpg",
        Name:"Matuy Dee",
        Company :"CEO",
        age:20,
        para:"Lorem ipsum dolor sit amet consecter adjusting edit"

    },    
    
     {
       image:"https://i.pinimg.com/1200x/7f/67/9c/7f679c5e614845ac6b12594b513b9575.jpg",
        Name:"Sarah Webl",
        Company:"Designer",
        age:29,
        para:"Lorem ipsum dolor sit amet consecter adjusting edit"

    },
    
     {
       image:"https://i.pinimg.com/1200x/31/21/5c/31215c6fefebd89a0acc97832f70a4be.jpg",
        Name:"Ariane Gren",
         Company:"Designer",
        age:35,
        para:"Lorem ipsum dolor sit amet consecter adjusting edit"

    },
     {
       image:"https://i.pinimg.com/1200x/a4/ad/e3/a4ade34601af89c976de99b6c1cb42a5.jpg",
        Name:"Adee Kuli",
        Company:"Designer",
        age:50,
        para:"Lorem ipsum dolor sit amet consecter adjusting edit"

    },

     {
       image:"https://i.pinimg.com/736x/36/af/73/36af73ef3cd451d1e60d45899ee15043.jpg",
        Name:"Sarah Jona",
        Company:"Designer",
        age:30,
        para:"Lorem ipsum dolor sit amet consecter adjusting edit"

    },
     {
       image:"https://i.pinimg.com/736x/6f/2e/13/6f2e13efa2bbdaf318967ece2314ee6f.jpg",
        Name:"JIMMY KIT",
        Company:"Designer",
        age:25,
        para:"Lorem ipsum dolor sit amet consecter adjusting edit"

    },

]

function hellofunction(){
var sum=''
arr.forEach(function(e,idx){
       console.log(e,idx)
        sum = sum + `<div id="card">
        <img src=${e.image} alt="user">
        <h1>${e.Name}</h1>
        <h2>Company: ${e.Company}</h2>
        <h5>age:${e.age}</h5>
        <p>${e.para}</p>
         <button id=${idx}>Close data</button>
    </div>`
})


var main=document.querySelector('#main')
main.innerHTML=sum;
}

hellofunction()

main.addEventListener('click',function(dets) {
    var gold = arr[dets.target.id]
    console.log(gold);
    gold.para='This can include a wide range of fields such as graphic design, information design, fashion design, and more.'
    hellofunction()

})