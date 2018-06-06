import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';

//observable
import { Observable } from 'rxjs';
import 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class ThronesHttpService {

  public baseurl = "https://www.anapioficeandfire.com/api";

    constructor(private _http:HttpClient) {
      console.log("Thrones http-service called");
    }
    public handleError(err:HttpErrorResponse) {
      console.log("Handle error http calls");
      console.log(err.message);
      return Observable.throw(err.message);
    }
    //Display all houses 
    public gethouses():any {
      let resp = this._http.get(this.baseurl+'/houses');
      console.log(resp);
      return resp;
    }

    //Display all characters 
    public getcharacters():any {
      let resp = this._http.get(this.baseurl+'/characters');
      console.log(resp);
      return resp;
    }

    //Display all books 
    public getbooks():any {
      let resp = this._http.get(this.baseurl+'/books');
      console.log(resp);
      return resp;
    }
  }   
