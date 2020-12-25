import{Date} from './date'
export class Employee {
    constructor(private  name ?: string , private hire_date ?: Date,  private month ?:number) {

    } 
    get_name(){
        return this.name ; 
    }
    get_hire_date(){
        return this.hire_date; 
    }
    get_month(){
        return this.month; 
    } 
    get_employee_info(){
        return "name : "+this.get_name ()+ "\n" + 
                " hiredate :  " + this.get_hire_date().get_date() + " \n" +
                " month : " + this.get_month(); 

    }
    set_name(name) { 
        this.name = name ; 
        
    } 
    set_hire_date(date:Date) {
        this.hire_date= date; 
    } 
    set_month(month_sal : number){ 
        if (month_sal >=0)
        this.month = month_sal ; 
    } 

}