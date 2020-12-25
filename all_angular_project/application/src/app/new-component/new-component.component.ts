import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit { 

  Students; 
  constructor(service:StudentService) {
    this.Students= service.getStudents(); 
   } 
    name = ""; 
    gpa = 0; 
    university= ''; 
  ngOnInit(): void {
  }  

   onAdd(){
     let newStudent = {id:this.Students.length+1 , name:this.name, GPA:this.gpa, unvisersity:this.university} ;
     this.Students.push(newStudent);
   } 
   onRemove(student){ 
    let index= this.Students.indexOf(student);  
    this.Students.splice(index,1); 
   } 
   onUpdate(student){
    student.id =55 ; 
    student.name= this.name ; 
    student.GPA =this.gpa ;
    student.unvisersity = this.university; 
   }
   

 

}
