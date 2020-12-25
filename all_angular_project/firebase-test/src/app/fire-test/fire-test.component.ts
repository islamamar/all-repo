import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fire-test',
  templateUrl: './fire-test.component.html',
  styleUrls: ['./fire-test.component.css']
})
export class FireTestComponent implements OnInit {
  courses : any = [] ; 
  courses$;  
  author$; 
  newcourse$ ; 
  constructor(db :AngularFireDatabase ){ 
    
     this.courses$ = db.list('/courses').valueChanges() ; 
     this.author$ = db.list('/author/1').valueChanges(); 
     this.newcourse$= db.list('courses'); 
       

   } 

   add(input : HTMLInputElement){
      this.newcourse$.push(input.value); 
      input.value = ' '; 
   }

  ngOnInit(): void {
  }
 
}
