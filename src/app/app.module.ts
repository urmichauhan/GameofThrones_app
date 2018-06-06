import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, ViewContainerRef } from '@angular/core';
import {RouterModule,Routes,Router} from '@angular/router';

import { View1component } from "./View1/View1.component";
import { View2component } from "./View2/View2.component";
import { Housecomponent } from "./House/House.component";
import { Charactercomponent } from "./Character/Character.component";
import { Bookcomponent } from "./Book/Book.component";
import { Houseinfocomponent } from "./Houseinfo/Houseinfo.component";
import { Characterinfocomponent } from "./Characterinfo/Characterinfo.component";
import { Bookinfocomponent } from "./Bookinfo/Bookinfo.component";
/* import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastModule, ToastOptions} from 'ng2-toastr/ng2-toastr'; */
//http service 
import { ThronesHttpService } from './thrones-http.service';

import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    View1component,
    View2component,
    Housecomponent,
    Charactercomponent,
    Bookcomponent,
    Houseinfocomponent,
    Characterinfocomponent,
    Bookinfocomponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    /* ToastOptions,
    BrowserAnimationsModule,
    ToastModule.forRoot(), */
    RouterModule.forRoot([
        {path:'View1',component:View1component},
        {path:'View2',component:View2component},
        {path:'House',component:Housecomponent},
        {path:'Character',component:Charactercomponent},
        {path:'Book',component:Bookcomponent},
        {path:'Houseinfo',component:Houseinfocomponent},
        {path:'Characterinfo',component:Characterinfocomponent},
        {path:'Bookinfo',component:Bookinfocomponent}
    ])
  ],
  exports :[
    RouterModule
  ],
  providers: [ThronesHttpService],
  bootstrap: [AppComponent]
})

export class AppModule{ }
