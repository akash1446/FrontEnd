var WTC = ['IND','SA','ENG','AUS','BAN','PAK','NZ']

var btn=document.querySelector('button');
var h1 = document.querySelector('h1');

btn.addEventListener('click', function(){
    let teams= Math.floor(Math.random()*WTC.length);
    let trophy = WTC[teams];
    console.log(trophy);
    h1.innerHTML=trophy;
})

var arr=['IND','No','Yes',true,{userName: 'Akash',age:20}];
console.log(arr[4].age);


var WTC = [

    {
        team:'IND',
        Pri:'blue',
        sec:'white'
    },
    {
        team:'SA',
        pri:'green',
        sec:'yellow'
    },
    {
        team:'ENG',
        pri:'white',
        sec:'red'
    },
        {
        team:'AUS',
        Pri:'yellow',
        sec:'white'
    },
    {
        team:'NZ',
        pri:'black',
        sec:'white'
    },
    {
        team:'BAN',
        pri:'green',
        sec:'white'
    },
      {
        team:'PAN',
        pri:'green',
        sec:'darkgreen'
    },
    
]

var btn=document.querySelector('button');
var h1 = document.querySelector('h1');


btn.addEventListener('click', function(){
    let name= Math.floor(Math.random()*WTC.length)
    let trophy = WTC[name];
    console.log(trophy.team)
    h1.innerHTML=trophy.team
    h1.style.backgroundColor=trophy.sec
    h1.style.color=trophy.pri
})



var WTC =[
    {
       captain : 'Klrahul',
       team: 'IND',
       pri:'blue',
       sec:'white'

    },
    {
        captain:'Bhavuma',
        team: 'SA',
        pri:'green',
        sec:'yellow',
    }

]


var btn=document.querySelector('button');
var h1 = document.querySelector('h1');


btn.addEventListener('click', function(){
    let name= Math.floor(Math.random()*WTC.length)
    let trophy = WTC[name];
    console.log(trophy.captain)
    h1.innerHTML=trophy.captain
    h1.style.backgroundColor=trophy.sec
    h1.style.color=trophy.pri
})

