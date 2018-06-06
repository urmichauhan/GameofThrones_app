import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit, OnDestroy, ViewContainerRef } from "@angular/core";
import { Location } from "@angular/common";
import { ThronesHttpService } from '../thrones-http.service';

/* import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  ToastsManager } from 'ng2-toastr/ng2-toastr'; */


@Component ({
    selector:'app-Characterinfo',
    templateUrl:'./Characterinfo.component.html',
    styleUrls:['./Characterinfo.component.css'],
    providers:[Location]
})

export class Characterinfocomponent implements OnInit {
    public arrayname;
    public carddetails;
    public errormsg:boolean;
    public show:boolean = false;   
    public arraydetails:any=[]; 
    constructor(public _route:ActivatedRoute,router:Router,public thronesservice:ThronesHttpService,private location:Location) {
        console.log("constructor is called");
        
    }
    //View-1
    public getcharacters():any {
        //Houses
        let names = this.arrayname;
        this.thronesservice = this.thronesservice.getcharacters().subscribe(
            data =>{
                this.arrayname = data;
                this.carddetails = data;
                console.log(this.arrayname);
                console.log(data);
                console.log(this.carddetails);
                for(let i of data){
                    for(let o=0;o<i.aliases.length;o++){
                        console.log(i.aliases[o]);
                    }
                }
                
                this.arrayname.sort(function(a, b){
                    let nameA=a.aliases, nameB=b.aliases;
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
    public showdetails(iname)  {
        this.show = !this.show;
        //console.log(iname);
        console.log(this.carddetails);
        for(let k of this.carddetails)
        {
            console.log(k.aliases);
            for(let o=0;o<k.aliases.length;o++){
                console.log(k.aliases[o]);
                if(iname == k.aliases[o])
                {
                    console.log(k.aliases[o]);
                    this.arraydetails = k;
                    console.log(this.arraydetails);
                } 
            }
            
        }
        console.log(this.arraydetails);
    }  
    ngOnInit() {   
        console.log("ngoninit called");
        this.getcharacters();
        console.log(this.arraydetails);
        
    }

}