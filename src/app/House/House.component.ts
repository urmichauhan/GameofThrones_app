import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, OnDestroy, ViewContainerRef } from "@angular/core";
import { Location } from "@angular/common";
import { ThronesHttpService } from '../thrones-http.service';

/* import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  ToastsManager } from 'ng2-toastr/ng2-toastr'; */


@Component ({
    selector:'app-House',
    templateUrl:'./House.component.html',
    styleUrls:['./House.component.css'],
    providers:[Location]
})

export class Housecomponent implements OnInit {
    public arrayname;
    public errormsg:boolean;
    public v2:boolean;
    public v1:boolean;
    public goback():any {
        this.location.back();       
       }
    constructor(public _route:ActivatedRoute,router:Router,public thronesservice:ThronesHttpService,private location:Location) {
        console.log("constructor is called");
        
    }
    //View-1
    public gethouses():any {
        //Houses
        let names = this.arrayname;
        this.thronesservice = this.thronesservice.gethouses().subscribe(
            data =>{
                
                this.v1=true;
                this.arrayname = data;
                console.log(this.arrayname);
                console.log(data);
                for(let i of data){
                    console.log(i.name);
                    
                }
                this.arrayname.sort(function(a, b){
                    let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
                    if (nameA < nameB) //sort string ascending
                        return -1 
                    if (nameA > nameB)
                        return 1
                    return 0 //default return value (no sorting)
                })
            },
            error => {
                this.errormsg = true;
                console.log(this.errormsg);
                console.log("some error occured");
                console.log(error.errorMessage);
            }
        )
        
    }
    
    
    ngOnInit() {   
        console.log("ngoninit called");
        this.gethouses();
        
        
    }

}