import { Component, OnInit } from '@angular/core';
// import du module de stockage session cool-storage 
import { CoolLocalStorage } from 'angular2-cool-storage';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { URLSearchParams, } from '@angular/http';
import {Team} from '../../../class/user'
import {User} from '../../../class/user'
import {Skill} from '../../../class/skill'
import {SrvUserService} from '../../../shared/user.service'
import {SrvSkillService} from '../../../shared/skill.service'
import {SrvTeamService} from '../../../shared/team.service'
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;


@Component({
  selector: 'app-mygroup-main',
  providers: [SrvUserService,SrvTeamService,SrvSkillService],
  templateUrl: './mygroup-main.component.html'
})

export class MyGroupMainComponent implements OnInit {
  users: User[];
  skills: Skill;
  team: Team;
  usersinfo : Array<{info: Team, users : Array<{user : User,role :string}>;}>;


    // Method in component class
trackByFn() {

}

localStorage: CoolLocalStorage;

constructor(private route: ActivatedRoute,localStorage: CoolLocalStorage,private userSrv: SrvUserService,private teamSrv: SrvTeamService,private skillSrv: SrvSkillService) {


}
  ngOnInit() : void  {

  
    this.teamSrv.getTeam()
    .then(users=> this.users = users);

      
    this.skillSrv.getAllSkills()
    .then(skills=> this.skills = skills);

    AdminLTE.init();
    
  }

}