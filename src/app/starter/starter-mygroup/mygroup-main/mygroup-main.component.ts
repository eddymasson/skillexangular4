import { Component, OnInit } from '@angular/core';
// import du module de stockage session cool-storage 
import { CoolLocalStorage } from 'angular2-cool-storage';
import {Team} from '../../../class/user'
import {User} from '../../../class/user'
import {Skills} from '../../../class/skills'
import {SrvUserService} from '../../../shared/user.service'
import {SrvTeamService} from '../../../shared/team.service'
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;


@Component({
  selector: 'app-mygroup-main',
  providers: [SrvUserService,SrvTeamService],
  templateUrl: './mygroup-main.component.html'
})

export class MyGroupMainComponent implements OnInit {
  user: User;
  team: Team;


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

constructor(localStorage: CoolLocalStorage,private userSrv: SrvUserService,private teamSrv: SrvTeamService) {
  this.localStorage = localStorage;   
  
}
  ngOnInit() {
<<<<<<< HEAD
let users: User[];
  this.userSrv.getUserById(6,'9e6babc5542e').subscribe(user => this.user = user);
  users[0] = this.user;
 this.userSrv.getUserById(4,'9e6babc5542e').subscribe(user => this.user = user);
 users[1] = this.user;
console.log(users[1]);
  
=======
   let userinfo = this.userSrv.getUserById(6,'9e6babc5542e').subscribe(user => this.user = user);
   console.log(this);
   let teaminfo = this.teamSrv.getTeamById(4,'9e6babc5542e').subscribe(team => this.team = team);
   console.log(this);
>>>>>>> 890c6e792b49932b04c7681baa7fd9a3bd274d53
    //Définition de la variable de session 
  
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

}