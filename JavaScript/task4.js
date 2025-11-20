// map
var arr = [2,3,4,5,6]
var val = arr.map(function(value){
    return value * 3;
})
console.log(val);

var arr = [2,3,4,5,6]
var val = arr.map(function(value){
    return value + 3;
})
console.log(val);

var arr = [2,3,4,5,6]
var val = arr.map(function(value){
    return value - 3;
})
console.log(val);

var arr = [2,3,4,5,6]
var val = arr.map(function(value){
    return value / 3;
})
console.log(val);

//filter
var  arr = [10,20,30,40,50]
var fn = arr.filter(function(value){
    return true;
})
console.log(fn);

var  cost = [10,20,30,40,50]
var ans = cost.filter(function(value){
    return false;
})
console.log(ans);

var  rate = [1,2,3,4]
var num = rate.filter(function(value){
    return value > 1;
})
console.log(num);

var  rate = [1,2,3,4]
var num = rate.filter(function(value){
    return value === 4;
})
console.log(num);

var  rate = [1,2,3,4]
var num = rate.filter(function(value){
    return value <= 4;
})
console.log(num);


// reduce
var red = [19,18,1,6,4]
var low= red.reduce(function(accu,key){
    return accu+key;
},0)
console.log(low);

var red = [19,18,1,6,4]
var low= red.reduce(function(accu,key){
    return accu-key;
},1)
console.log(low)

var red = [19,18,1,6,4]
var low= red.reduce(function(accu,key){
    return accu*key;
},1)
console.log(low)

var red = [19,18,1,6,4]
var low= red.reduce(function(accu,key){
    return accu/key;
},2)
console.log(low)

var red = [19,18,1,6,4]
var low= red.reduce(function(accu,key){
    return accu%key;
},0)
console.log(low)

// arrays->sort
var sort = [1,1,2,3,4,5,2,3,5]
var sort2=[... sort]
console.log(sort2);
var ans=[... new Set(sort)]
console.log(ans)
var newarray=ans.sort(function(a,b){
    return b-a;
});
console.log(newarray);

var newarray=ans.sort(function(a,b){
    return a-b;
});
console.log(newarray);

