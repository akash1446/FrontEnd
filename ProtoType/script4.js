let car={
    make:'Tata',
    model:'tatamotors',
    year:2022,
    start:function(){
        return `${this.make} car  is started in the year of ${this.year}`
    }
}
console.log(car.start());

function employee(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;
}
let emp1=new employee('sai',25,40000);
console.log(emp1.name);
console.log(emp1.age);
console.log(emp1.salary);

//class
class Car{
    constructor(make,model,year){
        this.make=make;
        this.model=model
    }
    start(){
        return `${this.make} car is started  ${this.model}`
    }
}
    class ElectricCar extends Car{
        device(){
            return `${this.make} electric car will be started with the current inheritance`
        }
    }
let mycar=new ElectricCar('tata','tataaci');
console.log(mycar.start());
console.log(mycar.device());


//Encapsulation
class BankAccount{
    #balance=500;
     withdraw(amount){
        this.#balance-=amount;
         return this.#balance;
     }
     Savings(amount){
        this.#balance=amount;
        return this.#balance;
     }
     deposit(amount){
        this.#balance+=amount;
        return this.#balance;
     }
     getBalance(){
        return `${this.#balance}`
     }
}
let Account = new BankAccount();
console.log(Account.withdraw(500));
console.log(Account.Savings(1000));
console.log(Account.deposit(800));
console.log(Account.getBalance());

//Polymorphism
class Lion{
    Sound(){
        return 'roar';
    }
}
class whiteLion extends Lion {
    sound(){
        return 'growl';
    }
    
}
let lion2=new whiteLion();
let lion3= new Lion();
console.log(lion2.sound());
console.log(lion3.Sound());

//Task1;
class Payment{
    processPayment(amount){
        return `It is Processing of the amount of ${amount}`;
    }
}
class netBanking extends Payment{
    processPayment(amount){
        return 'NetBanking Payment of '+ amount;
    }
}
let Payment1=new Payment();
let Payment2=new netBanking();
console.log(Payment1.processPayment(7000));
console.log(Payment2.processPayment(10000));

//Abstraction
class Fridge{
    On(){
        return 'Fridge is On';
    }
    Off(){
        return 'Fridge is Off';
    }
}

let coolness = new Fridge();
console.log(coolness.On());
console.log(coolness.Off());

//Static Methods
class MathOperations{
    static add(a,b){
        return a+b;
    }
    static subtract(a,b){
        return a-b;
    }
    static multiply(a,b){
        return a*b;
    }
    static divide(a,b){
        return a/b;
    }
    static modulus(a,b){
        return a%b;
    }
}
let MathOperations1=new MathOperations();
console.log(MathOperations.add(10,5));

console.log(MathOperations.subtract(20,40));
console.log(MathOperations.multiply(60,5));
console.log(MathOperations.divide(100,4));
console.log(MathOperations.modulus(29,5));




// Create a function orderedFood that returns a promise  it should resolve after 3 seconds
//with pizza delivered
//bonus:-Add a chance to reject with delivery failed
function orderedSwiggyFood(){
    return new Promise((res,rej)=>{
        setTimeout(() => {
            let chance=Math.random()<0.7;
            if(chance){
                res('pizza Is Delivered');
            }
            else{
                rej('delivery failed');
            }
            
        },1000)
    })
}
orderedSwiggyFood()
.then(function(){
    console.log("new Pizza Is Delivered 🍕");
})
.catch(function(){
     console.log('delivery failed ❌')

})

//Example
function fetchData(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
         const success = true;
         if(success){
            resolve('data successfully fetched📊');
         }
         else{
            reject('error fetching data❌');
         }
       },100)
    })
}
let response=fetchData()
console.log(response);
fetchData()
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})





