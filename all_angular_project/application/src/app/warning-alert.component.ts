import { Component } from '@angular/core';
import { NewCourseService } from './newcourse.services';

 
 @Component({ 
     selector:'app-Warning-alert',
     template : `
     <div> Warning Alert   </div> ,
     {{getTitle()}} 
     <ul> 
    <li *ngFor= 'let course of Courses'>{{course }}  </li>
     <img [src]='url' [attr.colSpan]='colSpan'>
     <div (click)='divclick()'>
     <button class='btn btn-primary' [class.active]='isActive' (click)= "onSave($event)"> save </button>  
     </div>
     <input [class.form-control]='value'/> 
     <input (keyup.enter)='onKey()'>
     
   

     </ul> 
     `    ,
     styles: [`
     div { 
        padding :20px ; 
        background-color : mistyrose ;  
        border: 1px solid green;
     }
  
     `]
    
 })
 export class WarinngComponent {  
    title = "hellow wolrd" ;     
    isActive = false; 
    value= 'form-control';
    color= 'red';  
    url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0ezZ8vvhq12ZAvWkpRSMspCJEeYolc0hQyw&usqp=CAU'
    Courses ;  
    colSpan =2; 
    constructor(service : NewCourseService){    
     this.Courses = service.getCourses(); 
    }

    getTitle() {
        return this.title ; 
    } 
    onSave($event){
        console.log("save button is pressed",$event) ;  
        $event.stopPropagation(); 
    } 
    divclick() 
    {
        console.log("div clicked");
    } 
    onKey( ){ 
      
     
        console.log("key up event",); 
    
    }

     

 }