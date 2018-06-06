import { ActivatedRoute, Router,RouterModule } from "@angular/router";
import { Component, OnInit, OnDestroy, ViewContainerRef } from "@angular/core";
import { Location } from "@angular/common";
import { ThronesHttpService } from '../thrones-http.service';
import { Window } from "selenium-webdriver";

/* import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  ToastsManager } from 'ng2-toastr/ng2-toastr'; */


@Component ({
    selector:'app-View1',
    templateUrl:'./View1.component.html',
    styleUrls:['./View1.component.css'],
    providers:[Location]
})

export class View1component implements OnInit {
    public h = "/House";
    public c = "/Character";
    public b = "/Book";
    /* public goback():any {
        this.location.back();       
       } */
    constructor(public _route:ActivatedRoute,public router:Router,public thronesservice:ThronesHttpService,private location:Location) {
        console.log("constructor is called");
        
    }
     public gohouse() {
        console.log("Button clicked");
       // window.location.href = '/House.component.html';
    }
    public gocharacter() {
        this.router.navigate(['/Character']);
    }
    public gobook() {
        this.router.navigate(['/Book']);
    }
    ngOnInit() {   
        console.log("ngoninit called");
        
        
    }
    
    
    
}