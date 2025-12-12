//ES-5 Prototype Example
function  student(username,age){
    this.username=username;
    this.age=age;
}
function teacher(username,age,subject){
    this.username=username;
    this.age=age;
    this.subject=subject;
}
let textbook =new teacher('a2',40,'maths');
console.log(textbook);

let newteacher = new teacher('Banu',35,'CN');
console.log(newteacher);

