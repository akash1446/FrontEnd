let computer = {cpu:12};

let laptop = {screen:'HD',
  __proto_:computer,
};

console.log('laptop',laptop.__proto_);

let genericcar = {wheels:4};

let tesla ={
    driver:'A1'
}
Object.setPrototypeOf(tesla,genericcar);
console.log(tesla.wheels);


