import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs';  



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'firebase-test'; 
   courses : any = [] ; 
   subscribe : Subscription; 
  courses$ ;  
  authors$;  
  newcourse$; 
  constructor(db : AngularFireDatabase){
  this.courses$ = db.list('/courses').valueChanges() ;   
  this.newcourse$ = db.list('/courses') ; 
  this. authors$ = db.object('/author/1').valueChanges() ; 

  }  
  add(input: HTMLInputElement){
    console.log(input.value); 
    this.newcourse$.push(input.value);
    input.value = ''; 
  } 
  Update(course) {
    console.log(course.key);
  }

  Remove(course){

  }



}
