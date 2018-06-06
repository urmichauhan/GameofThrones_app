import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, OnDestroy, ViewContainerRef } from "@angular/core";
import { Location } from "@angular/common";
import { ThronesHttpService } from '../thrones-http.service';

/* import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  ToastsManager } from 'ng2-toastr/ng2-toastr'; */


@Component ({
    selector:'app-Character',
    templateUrl:'./Character.component.html',
    styleUrls:['./Character.component.css'],
    providers:[Location]
})

export class Charactercomponent implements OnInit {
    public arrayname;
    public errormsg:boolean;
    public goback():any {
        this.location.back();       
       }
    constructor(public _route:ActivatedRoute,router:Router,public thronesservice:ThronesHttpService,private location:Location) {
        console.log("constructor is called");
        
    }
    
    public getcharacters():any {
        //Character
        
        this.thronesservice = this.thronesservice.getcharacters().subscribe(
            data =>{
                this.arrayname = data;
                console.log(this.arrayname);
                console.log(data);
                for(let i of data){
                    console.log(i.name);
                    
                }
                this.arrayname.sort(function(a, b){
                    let nameA=a.aliases, nameB=b.aliases;
                    if (nameA < nameB) 
                        return -1 
                    if (nameA > nameB)
                        return 1
                    return 0 
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
        this.getcharacters();
        
    }

}