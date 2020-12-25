import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavabrComponent } from './navabr/navabr.component';
import { CommentsComponent } from './comments/comments.component'; 
import{HttpClientModule}from '@angular/common/http';
import { CommentsService } from './comments.service';
import { AddCommentComponent } from './add-comment/add-comment.component'; 
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavabrComponent,
    CommentsComponent,
    AddCommentComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule ,
    RouterModule.forRoot([
      {
        path:  '' ,
      component : CommentsComponent
     }, 
       
      {
        path:  'addcomment' , 
        component : AddCommentComponent 
      }, 
       
      {
        path:  '** ' , 
        component : NotfoundComponent 
      }, 
         

  ])  
  ],
  providers: [CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
