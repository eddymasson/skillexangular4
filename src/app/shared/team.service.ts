import { Injectable }    from '@angular/core';  
import { User } from '../class/user';  
import {Http, Response,Headers,RequestOptions} from '@angular/http';
import {Team } from '../class/team';  
import 'rxjs/add/operator/map';  
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
  

@Injectable()
export class SrvTeamService  {

  urlTeam='http://192.168.72.105/api/team/';

  constructor(private _http: Http) {  }

  getTeamById(id,apikey): Observable<Team> { 
    //return  this._http.get(this.urlFiche+'id').map((response : Response)=> <Fiche[]> response.json()).toPromise();
    return  this._http.get(this.urlTeam+id+'?apikey='+apikey).map((response : Response)=> <Team> response.json()).catch(this.httpError);
  }


  private httpError(error : Response){
    console.error('error :: ',error);
    return Observable.throw (error.json().error || 'Server error');  
}

}