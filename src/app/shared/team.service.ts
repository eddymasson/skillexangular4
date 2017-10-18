import { Injectable }    from '@angular/core';  
import { User } from '../class/user';  
import {Http, Response,Headers,RequestOptions} from '@angular/http';

import {Team } from '../class/team';  
import {Skill } from '../class/Skill';  
import 'rxjs/add/operator/map';  
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class SrvTeamService  {

  urlUsers='api/users';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private _http: Http) {  }

  
  getTeamById(id,apikey): Observable<Team> { 
    //return  this._http.get(this.urlFiche+'id').map((response : Response)=> <Fiche[]> response.json()).toPromise();
    return  this._http.get(this.urlUsers+id+'?apikey='+apikey).map((response : Response)=> <Team> response.json()).catch(this.httpError);
  }

  getTeam(): Promise<User[]> {
    return this._http.get(this.urlUsers)
               .toPromise()
               .then(response => response.json().data as User[])
               .catch(this.handleError);
  }
   
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private httpError(error : Response){
    console.error('error :: ',error);
    return Observable.throw (error.json().error || 'Server error');  
}


}