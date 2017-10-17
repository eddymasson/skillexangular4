import { Component, OnInit } from '@angular/core';
import { StarterComponent } from '../starter.component';
import { CoolLocalStorage } from 'angular2-cool-storage';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { URLSearchParams, } from '@angular/http';
import {Team} from '../../class/team'
import {User} from '../../class/user'
@Component({
  selector: 'app-starter-list',
  templateUrl: './starter-list.component.html'
})
export class StarterListComponent implements OnInit {
  user: User;
  team: Team;


  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];
  localStorage: CoolLocalStorage;
  constructor(private route: ActivatedRoute,localStorage: CoolLocalStorage) { }

  role = 'pilote';

  ngOnInit() {
    // add the the body classes
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');
   let team;
   let role;      
 localStorage.setItem('users',team);
 console.log(localStorage.getItem('users'));
 localStorage.setItem('role',role);
 console.log(localStorage.getItem('role'));
  }

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }
}
