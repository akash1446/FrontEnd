// console.log("Hi guys build apis")
// // logical operators
// let transfermoney = true;
// let isnottransforcash = false;
// console.log(transfermoney && isnottransforcash) 
// console.log(transfermoney || isnottransforcash)
// console.log(!transfermoney)

// //comparsion operators
// let a = 10;
// let b = 20;
// console.log(a>=b)
// console.log(a<=b)
// console.log(a==b)
// console.log(a===b) //strict comparsion
// console.log(a=b) // Assignment operator

// // objects
// let  username = 'Akash';
// username = 'q12eer';
// console.log(username)

// let userName = {
//                 firstName : 'ravi',
//                 age:24,
//                 village:'veeravasram'
//                }

// console.log(
//             userName.firstName,
//             userName.age,
//             userName.village
// );
//  userName.firstName='i'
//  console.log(userName.firstName)

// // Arrays
// let heros = ['a','b','c']
// console.log(heros[0])
// console.log(heros[1])
// console.log(heros[2])


let a=10;
let b=20;
if(a>b){
    console.log("a is greater than b");
}
else{
    console.log("a is not greater than b")
}

//check if a string is equal to another string or not
let username1 = "Vasu";
let username2 = "Vasu";
  if(username1===username2) {
    console.log("both strings are equal")
   }
  else {
    console.log("both strings are not equal")
   }

//check if a variable is a number or not
let number = 45;
if(typeof(number)==='number'){
    console.log("variable is a number");
}else{
    console.log("it is not variable number");
}

//check if a boolean value is true or flase
let  isfriendvacation=false;
if(isfriendvacation){
    console.log("My friend is go to trip")
}
else{
    console.log("my friend trip is cancel")
}
// check if  an array is empty or not
 let array = [1,2,3];
 console.log(array.length);
 if(array.length==0){
    console.log("array is empty");
 }
 else{
    console.log("array is not empty");
 }
 //declare an array with your favouriate crickters and access of the first element in an variable and it in console
 let players = ["M.S.D","Rohit","KL.Rahul","Virat"];
 let res = players[0];
 console.log(res);

 //declare an array of your favouriate cities and access third element in an array and store it and display it
 let cities = ['Hyderabad','Rajamandry','Bhimavaram','Palakolu'];
 let res1 = cities[2];
 console.log(res1);

 // you have an array name dosas replace the 2nd dosa rava dosa
 let dosas = ['onion dosa','masala dosa','ravadosa','eggdosa'];
 console.log(dosas);
  dosas[1] = 'karam dosa';
  console.log(dosas);

  //array of citis and need to add one more city in an array by push
  let city = ['Ameripeta','Viza','Srikakulam','tanuku'];
  city.push('Chennai');
  console.log(city);

 //array of citis and need to add one more city in an array by pop
 let citis = ['Ameripeta','Viza','Srikakulam','tanuku','chennai'];
 citis.pop();
 console.log(citis);


