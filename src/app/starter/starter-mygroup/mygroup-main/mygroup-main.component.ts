import { Component, OnInit } from '@angular/core';
// import du module de stockage session cool-storage 
import { CoolLocalStorage } from 'angular2-cool-storage';

import {User} from '../../../class/user'
import {Skills} from '../../../class/skills'
import {SrvUserService} from '../../../shared/user.service'
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;


@Component({
  selector: 'app-mygroup-main',
  providers: [SrvUserService],
  templateUrl: './mygroup-main.component.html'
})

export class MyGroupMainComponent implements OnInit {

  user: User;


  myskills: Skills[] = [
    { id: 1, name: 'PHP', level:3},
    { id: 2, name: 'Oracle', level:3},
    { id: 3, name: 'Html', level:2},
    { id: 4, name: 'Css', level:4},
    { id: 5, name: 'Html', level:5}
    ];
  

    // Method in component class
trackByFn(myskills, level) {
  return myskills.level;
}

localStorage: CoolLocalStorage;

constructor(localStorage: CoolLocalStorage,private userSrv: SrvUserService) {
  this.localStorage = localStorage;   
}
  ngOnInit() {
   let userinfo = this.userSrv.getUserById(5,'9e6babc5542e').subscribe(user => this.user = user);
   console.log(this);
    //Définition de la variable de session 
  
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

}