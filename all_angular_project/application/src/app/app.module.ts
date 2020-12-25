import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import {CourseCompoent} from './courses.component'
import {FormsModule} from '@angular/forms'; 
import { WarinngComponent} from'./warning-alert.component'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseService } from './courses.service';
import { NewComponentComponent } from './new-component/new-component.component';
import { StudentService } from './student.service';
import { SucessAlertComponent } from './sucess-alert/sucess-alert.component';
import { from } from 'rxjs';
import { NewCourseService } from './newcourse.services';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component'; 
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FollowersComponent } from './followers/followers.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCompoent,
    NewComponentComponent,
    SucessAlertComponent,
    WarinngComponent,
    NavbarComponent,
    NotfoundComponent,
    ProfileComponent ,
    HomeComponent,
    FollowersComponent ,
    
 
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path : '' ,
        component:HomeComponent
        }, 
        {
          path : 'followers/:id' ,
           component:ProfileComponent
       },
      {
        path : 'followers' ,
        component:FollowersComponent
      },      
      {
        path : 'posts'     ,   
        component:PostComponent
      }, 
      { 
        // not found page 
        path : '**'     ,   
        component:NotfoundComponent
      },     
    ])
  ],
  providers: [CourseService,StudentService,NewCourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
