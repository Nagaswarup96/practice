var sum = 12;
var none = 22;

console.log(sum+none)

var name1 = "Nagaswarup"
var age = 24

var message = "Hi , my name is " + name1 +" and I am "+ age +" years old"
// alert(message)
console.log(message)
var students = ["Naga","Swarup","Nani"]

console.log(students)

var nsu = []

nsu.push(students[0])
console.log(nsu)

var index = students.indexOf("Naga")

if (index > -1)
{
    students.splice(index , 1)
}
students.pop()
console.log("students",students)


let fruits = [ "apple","Aam","Amla","orange"]

fruits.forEach(item=> console.log(item))
for(item of fruits){
    console.log(item)
};

for(item in fruits){
    console.log(item)
};

var arr =[1,2 ,3, 4,5];
console.log(arr);

arr.unshift(1000);
arr.unshift(10);
console.log(arr);
console.log(arr.shift());
console.log(arr);
let arr1 = arr.splice(1 ,3 , 9999);
console.log(arr1);
let arr2 = arr.slice(0,1);
console.log(arr2)

for(let i=0 ; i< arr.length;i++)
{
    console.log(arr[i])
};

var Fun=function(){
    console.log("Fuker");
    var func =9;
}

Fun();

function fetch(){
    console.log("Nagaswarup")
}

fetch.call();
fetch.apply();
