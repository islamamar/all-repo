import {Date} from "./date" ; 
import{Employee} from './employee'

let curretdate  = new Date(3,10,2020);  
let birthdate = new Date(16,5,1998); 
 let date = new Date(); 
console.log(curretdate.get_year()); 
console.log(date.age(curretdate, birthdate)) ;   
let date2 = new Date(3,10,2020) ; 
let emp = new Employee("islam",date2 , 2300); 
console.log(emp.get_employee_info());





