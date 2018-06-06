import { ActivatedRoute, Router,RouterModule } from "@angular/router";
import { Component, OnInit, OnDestroy, ViewContainerRef } from "@angular/core";
import { Location } from "@angular/common";
import { ThronesHttpService } from '../thrones-http.service';
import { Window } from "selenium-webdriver";

/* import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  ToastsManager } from 'ng2-toastr/ng2-toastr'; */


@Component ({
    selector:'app-View1',
    templateUrl:'./View2.component.html',
    styleUrls:['./View2.component.css'],
    providers:[Location]
})

export class View2component implements OnInit {
    public h = "/Houseinfo";
    public c = "/Characterinfo";
    public b = "/Bookinfo";
    
    constructor(public _route:ActivatedRoute,public router:Router,public thronesservice:ThronesHttpService,private location:Location) {
        console.log("constructor is called");
        
    }
     
    ngOnInit() {   
        console.log("ngoninit called");
        
        
    }
    
    
    
}