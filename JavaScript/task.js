//for loop that through  an array ['London','new York','paris','belin'] and skips "paris" store the other cities in a new array  'visited cities.
let cities=['London','New York','Paris','Gouva']
let vc=[]
for(let i=0;i<cities.length;i++){
    if(cities[i]=='Paris'){
        continue;
    }
    vc.push(cities[i]);
}
console.log(vc);

// use a for loop to iterate through array [1,2,3,4,5,6] and stop the iteration when the num 4 is found store the numbers before 4 in array named small numbers
let numbers =[1,2,3,4,5,6]
let sn=[]
for(const num of numbers){
    if(num===5){
        break;
    }
    sn.push(num);
}
console.log(sn);

// constant values for of 
const countries=['india','Nepal','America','Chinna']
for(const countr of countries){
    console.log(countr);
}

//for in -> objects is keys and value pairs
const symbols = {
    tw : 'Twitter',
    ig : 'Instagram',
    fb : 'FaceBook',
    yt : 'Youtube'

};
for(const sym in symbols){
    console.log(`key is : ${sym} and value is : ${symbols[sym]}`);
}

//for each loop
let fruits =['Pineapple','Banana','Mango'];
fruits.forEach(fruits=>{
    console.log(fruits);
})

