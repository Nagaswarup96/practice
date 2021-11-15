// const nums = [10, 20, 10, 20, 20, 10, 30, 50, 10];


// const reduced = nums.reduce((prev, curr, i) => {

//     if (prev[curr]) {
//         prev[curr] = ++prev[curr];
//     } else {
//         prev[curr] = 1;
//     }
//     return prev;
// }, {});

// let val = 0;
// let va = 0;
// for (let obj in reduced) {

//     va += Math.floor(reduced[obj] / 2);
// }

// console.log(va);
// const final = reduced.reduce((prev, curr, i)=>{

//     if(prev[curr])

// },{})



// function validate(num){
//     const ob = {};


//         if(ob[num]=== num){
//             ob[num] = ++ob[num];
//         }else{
//             ob[num] = 1;
//         }

//     return ob;
// }

// const ond = nums.map(validate);

// const und = ond.reduce((prev, curr, i)=>{
//     var keyp = Object.keys(prev)[0];

//     // var val = Object.values(curr)[0];
//     // var valp = Object.values(prev)[0];
//     // if()
//     // console.log(val);

//     var key = Object.keys(curr)[0];

//    if(keyp === key){ // und & 10 , 10 & 20, 20 & 10
//        prev[keyp] = ++prev[keyp];
//        console.log(true);
//    }else{
//        keyp = key;
//        console.log(true);
//    }
//    console.log(keyp);
//     return prev;
// },{})

// console.log(und);
// console.log(reduced);


// let str = "UDDDUDUU";

// let valley = 0;
// let level = 0;

// for (let i = 0; i < str.length; i++) {
//     if (str.charAt(i) === 'U') {

//         level++;
//     } else if (str.charAt(i) === 'D') {
//         if (level === 0) {
//             valley++;
//         }

//         level--;

//     }

// }

// console.log(valley);


// const cloud = [0, 0,0,0,  1, 0];

// let jumps = -1;

// for (let i = 0; i < cloud.length; i++) {
//     if (cloud[i] === 1) {
//         jumps += 0;
//     } else if (cloud[i] === 0) {
//         // if (i != 0) {
//             if ((cloud[i] === cloud[i + 2]) && (cloud[i] === cloud[i+1])) {
//                 jumps += 1;
//                 i++;
//             } 
//             else{
//                 jumps += 1;
//             }
//         // }
//     }
// }

// console.log(jumps)


// let str = "aba";


// let n =10;
// let count = 0;

//     for(let c of str){
//         if( c === 'a'){
//             count++;
//         }
//     }

// let ans =0;
// let rep = Math.floor(n/str.length);
// ans = rep*count;

// for(let i=0;i<n%str.length;i++){
//     if(str.charAt(i)==='a'){
//         ans++
//     }
// }

// console.log(ans);


// const arr = [ [-9, -9, -9, 1, 1, 1],
//               [0, -9, 0, 4, 3, 2],
//               [-9, -9, -9, 1, 2, 3],
//               [0, 0, 8, 6, 6, 0],
//               [0, 0, 0, -2, 0, 0],
//               [0, 0, 1, 2, 4, 0]]

// const newArr = [];

// for (let i = 0; i < 4; i++) {
//     for(let j=0;j< 4;j++){
//         newArr.push((arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2])); 
//     }
// }

// let max_val = -Infinity;

// for(let k=0;k<newArr.length;k++){
//     if(newArr[k]>max_val){ 
//         max_val=newArr[k];
//     }
// }

// console.log(newArr); 

// console.log(max_val);

// const numArr=[1, 2, 3, 4, 5]; 

// let n = 2;

// for(let i=0;i<n;i++){
//     let x = numArr.shift();
//     numArr.push(x);
// }

// console.log(numArr); 

// const arr = [5,1, 2, 3, 7, 8, 6, 4];

// const ys = sdf.split(" ");

// console.log(ys);

// let limit = 2;
// let i = 1;
// let x = 0;
// let bribes = 0;
// for (let val = 0; val < ys.length; val++) {
//     console.log("value  "+val);
//     x = i - parseInt(ys[val]);
//     if (parseInt(ys[val]) > parseInt(ys[val+1]) || parseInt(ys[val]) > parseInt(ys[val+2]) ) {
//         let y = Math.abs(x)

//         if (y <= limit ) {
//             console.log("array value:-"+parseInt(ys[val]));
//             console.log("y value:->"+y);
//             bribes += y;
//             console.log(bribes);

//         }
//         else{
//             console.log("array value:-"+parseInt(ys[val]));
//             console.log("Too chaotic");
//             break;
//         }

//     }
//     ++i;
// }

// console.log(Math.abs(10));

// let arr = [153, 123, 345];

// let z = 0;
// let m = [];
// for (let i = 0; i < arr.length; i++) {
//     let x = arr[i].toString();
//     for (let y of x) {
//         z += parseInt(y) ** 3;
//     }
//     if (z === arr[i]) {
//         m.push("number");
//     } else {
//         m.push("Not");
//     }

// }
// console.log(m.join("\n"));

// $(document).ready(function () {


//     $('.box').hide();
//     $('.middle').hover(function () {

//         $('.box').show();
//     })


// })

