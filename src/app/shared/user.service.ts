import { Injectable }    from '@angular/core';  
import {Team } from '../class/team';
import {Http, Response,Headers,RequestOptions} from '@angular/http';
import { User } from '../class/user';  
import 'rxjs/add/operator/map';  
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
  
//Webservice utilisant ihni, fonctionnel 
@Injectable()
export class SrvUserService {

  urlUser='http://192.168.72.105/api/user/';

  constructor(private _http: Http) {  }
//On passe l'identifiant souhaité et l'apikey de hni (vérifier que l'APIkey est bien à jour )
  getUserById(id,apikey): Observable<User> { 
 
    return  this._http.get(this.urlUser+id+'?apikey='+apikey).map((response : Response)=> <User> response.json()).catch(this.httpError);
  }


  private httpError(error : Response){
    console.error('error :: ',error);
    return Observable.throw (error.json().error || 'Server error');  
}

}
