 export class Date {
    constructor( private day ?: number,  private month ?: number ,  public year ?: number){

    }  

get_day(){
    return this.day
} 
get_year(){ 
    console.log("mmmm");
    console.log(this.year);
    return this.year; 
}
get_month(){
    return this.month ; 
} 
get_date(){
    return  this.get_day() + "/" + this.get_month()+ " / "+this.get_year();  
} 
set_day(day){  
    if (this.day <=30)
        this.day = day ; 

}

set_year(year){ 
    this.year = year; 

} 
set_month(month){  
    if (this.month <= 12)
        this.month= month ; 

}  
age(date1:Date , date2: Date){ 
    console.log(date1.year); 
    return Math.abs(date1.year - date2.year);
}

}