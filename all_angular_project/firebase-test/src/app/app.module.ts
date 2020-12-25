import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment'; 
import {AngularFireDatabaseModule} from 'angularfire2/database'; 
import { CommonModule } from '@angular/common';
import { FireTestComponent } from './fire-test/fire-test.component';
@NgModule({
  declarations: [
    AppComponent,
    FireTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule , 
  CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
