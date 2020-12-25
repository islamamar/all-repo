import { Injectable } from '@angular/core';
import { Commentsub } from './commentsub';

@Injectable({
  providedIn: 'root'
})
export class CommService {
  
  _comment = {
    id : 0 ,
    name : "",
    email : "",
    body : ""

  } 
  _checker:boolean ; 
  constructor() { } 
  setComment(comment , checker){  
    this._checker = checker
    this._comment = comment; 
    console.log("io " + this._comment) ;

  } 
  getComment(){
    return this._comment ; 
  }
  getchecker(){
    return this._checker ; 
  }
}
