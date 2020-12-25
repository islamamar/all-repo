import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';
import { CommService } from '../comm.service';
import {Commentsub} from "../commentsub" 



@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  constructor( private service : CommService) { }  
  // comment :Commentsub;
  comment = {
    id : 0 ,
    name : "",
    email : "",
    body : ""

  } 
   checker : boolean = false ; 


  @Output() AddingEvent = new EventEmitter(); 
  commentAdding(){   
    this.checker =true  ; 
  this.AddingEvent.emit(this.comment);      
  this.service.setComment(this.comment,this.checker ); 
  this.checker =false  ; 
   }

  ngOnInit(): void {
  }

}
