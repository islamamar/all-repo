import {Component} from '@angular/core' 
import { CourseService } from './courses.service';


 @Component({
     selector:'courses',
     template:` 
     <h1 [textContent]='title'> </h1>  
     <img [src]="url"/> 
     <table>
     <tr>
     <td [attr.ColSpan]="ColSpan"> hellw world</td> 
     <button class='btn btn-primary'[class.active]='isActive'> submit</button> 
     <input [class.form-control]='form'/> 
     <div (click)='ondiv($event)'>
     <button class='btn btn-danger'(click)='onKey($event)'>new button </button> 
     </div>
     <input #variable (keyup.enter)='newKeyup(variable.value)'/>
     <input name='name' [(ngModel)]='name' (click)='getName()'>
     
     
     </tr>
     </table>
          
     `
 }) 

 export class CourseCompoent{    
     
    form = 'form-control';
    isActive= false ;     
    Courses;  
    ColSpan=20 ;  
    name="islamAmar";
    title = " new world";   
    url = "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"

    constructor(service:CourseService) {        
        this.Courses= service.getCourses(); 

    }
    getTitle(){
        return  this.title ; 
    } 
    onKey($event){
        console.log(" the key is pressed",$event);  
        $event.stopPropagation(); 
    } 
    ondiv($event)
    {
        console.log("on div is clicked"); 
      
    } 
    newKeyup(variable){ 
      console.log('variable : ' ,variable);       

    } 
    getName(){
    console.log(this.name); 
    }

 }