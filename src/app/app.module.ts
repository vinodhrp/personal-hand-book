import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user-details/user/user.component';
import { UserListComponent } from './user-details/user-list/user-list.component';
import { FormsModule }   from '@angular/forms';
import { UserService } from './shared/user.service';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserComponent,
    UserListComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AccordionModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
   
  ],
  providers: [UserService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
