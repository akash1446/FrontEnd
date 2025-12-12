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







