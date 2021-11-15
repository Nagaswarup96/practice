const user =[
   { firstName : "Naga", lastName:"Swarup", age:24},
   {firstName : "Veni", lastName:"Prasad", age:46} ,
   {firstName : "Nidhi", lastName:"Shree", age:24},
   {firstName : "Antony", lastName:"jhon", age:34}
];


const detail = user.reduce((a , c)=>{
    if(c.age< 30){
       a.push(c.firstName);
    }
    return a;
}, []);

console.log(detail);

