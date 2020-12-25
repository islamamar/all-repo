import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examfile'; 
  onAddParent(comment){
    console.log("hhhhhhhhh");
    console.log(comment); 
  }
  
} 
