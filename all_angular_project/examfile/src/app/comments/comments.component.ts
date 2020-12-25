import { Component, OnInit } from '@angular/core';
import { CommService } from '../comm.service';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  Comments:any  = []   
  private  Url = "https://jsonplaceholder.typicode.com/comments" ;
  constructor(private service :CommentsService , private newservice : CommService) { }
 
  ngOnInit(): void { 
    this.service.getComment()
    .subscribe(response =>{
      // console.log(response);  
      this.Comments = response; 
    })
  } 
  // onCreate(input : HTMLInputElement) { 
  //   let Post:any = {title : input.value};  
  //   input.value = '' ;       
  //   this.service.createComment(Post)
  //     .subscribe(response => { 
  //       Post.id  = response ;
  //       this.Comments.splice(0,0,Post)
  //     }      
  //     )
  // } 

  onUpdate(comment) {
    this.service.updateComment(comment)
      .subscribe(response=> {
        console.log(response);
      })
  }  


  onDelete(comment)
  {
    this.service.deleteComment(2121251225812428)
    .subscribe(response =>{
      let index = this.Comments.indexOf(comment);
      this.Comments.splice(index,1); 
    })
  } 
 
  onAddParent(comment){ 
    this.Comments.splice(0,0,comment)
    console.log("aaaaaaaaaaa  " + this.newservice.getComment().name);
    // console.log(comment);
    // console.log("asdddddddddd")
  }


  } 

    

  

  


