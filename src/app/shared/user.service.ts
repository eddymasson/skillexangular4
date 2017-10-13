import { Injectable }    from '@angular/core';  

import {Http, Response,Headers,RequestOptions} from '@angular/http';
import { User } from '../class/user';  
import 'rxjs/add/operator/map';  
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
  

@Injectable()
export class SrvUserService {

  urlUser='http://192.168.72.105/api/user/';

  constructor(private _http: Http) {  }

  getUserById(id,apikey): Observable<User> { 
    //return  this._http.get(this.urlFiche+'id').map((response : Response)=> <Fiche[]> response.json()).toPromise();
    return  this._http.get(this.urlUser+id+'?apikey='+apikey).map((response : Response)=> <User> response.json()).catch(this.httpError);
  }


  private httpError(error : Response){
    console.error('error :: ',error);
    return Observable.throw (error.json().error || 'Server error');  
}

}
