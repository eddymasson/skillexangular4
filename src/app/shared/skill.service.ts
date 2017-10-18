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
export class SrvSkillService  {

  urlSkills='api/skills';
  urlSkillsAPI='api/skills';
  constructor(private _http: Http) {  }

  getAllSkills(): Promise<Skill> { 
    //return  this._http.get(this.urlFiche+'id').map((response : Response)=> <Fiche[]> response.json()).toPromise();
    return this._http.get(this.urlSkills)
     .toPromise()
    .then(response => response.json().data as Skill[])
    .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}