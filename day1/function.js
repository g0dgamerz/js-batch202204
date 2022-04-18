// console.log('test');
// function clickHandler()
// {
//     console.log("button clicked");
// }

const employees = [
    {id:1,name:"john doe", salary:12000,skills:['Java','.net']},
    {id:1,name:"jane doe", salary:22000,skills:['Python','js']},
    {id:1,name:"tom doe", salary:17000,skills:['html']}
];

// for (let employee in employees)
// {
//     console.log(employee.name);
// }

// employees.forEach(function(v) {console.log(v.name)});


//print all the names
employees.forEach((v)=>console.log(v.name));
// get total salary of all the employee
console.log(employees.map((e)=>e.name).join(", "));

//get total salary of all the employee
console.log(employees.map((e)=>e.salary).reduce(function(previousvalue,currentvalue){
    return previousvalue+currentvalue;
},0));

//making this smaller
console.log(employees.map((e)=>e.salary).reduce((p,c)=>p+c,0))


//get employee with salary > 15000

console.log(employees.filter((employee)=>employee.salary>15000));


//return true if there is an employee whose salary < 12000
console.log(employees.some((e)=>e.salary<12000))


//return true if there is employee have salary > 5000

console.log(employees.every((e,i)=>{
    console.log(`index at {i}`)
    e.salary>5000}));


console.log(employees.map((e)=>e.skills).flat());


//flatmap
//find
//sort
