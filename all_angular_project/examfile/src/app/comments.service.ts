import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private  Url = "https://jsonplaceholder.typicode.com/comments" ;
  constructor(private http :HttpClient) {

   
   } 

   getComment() {
    return  this.http.get(this.Url)
    } 
     createComment(comment){
       return this.http.post(this.Url,JSON.stringify(comment)) 
     } 
     deleteComment(id){
        return this.http.delete(this.Url+"/"+id)
     }
     updateComment(comment){ 
       return this.http.patch(this.Url+"/"+comment.id,JSON.stringify({isRead:true})) 
 
     }
}
