import { Component,OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute,Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Location]
})
export class AppComponent {
  title = 'Game of Thrones';
  public view_1 = "/View1";
  public view_2 = "/View2";
  
 
    constructor(public _route:ActivatedRoute,public router:Router,private location:Location) {
      console.log("constructor is called");
      
  }
  
	
  public goback() {
    //window.history.back();
    this.location.back();
    console.log("Back");
  } 
}
