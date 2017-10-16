import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { URLSearchParams, } from '@angular/http';
import { CoolLocalStorage } from 'angular2-cool-storage';

// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-starter-content',
  templateUrl: './starter-content.component.html',
  styleUrls: ['./starter-content.component.css']
})

export class StarterContentComponent implements OnInit {
  localStorage: CoolLocalStorage;
  constructor(private route: ActivatedRoute, localStorage: CoolLocalStorage) {}
  user = this.route.snapshot.queryParams["user"];
  team = this.route.snapshot.queryParams["id_team"];
  role = this.route.snapshot.queryParams["role"];



  ngOnInit() {
    // Update the AdminLTE layouts

    localStorage.setItem('role', 'pilote');
    //on affiche l'item de session 
    console.log(this.localStorage.getItem('role'));
    
    this.localStorage.setObject('users', {
      role:'pilote'});
      console.log(this.localStorage.getItem('users'));
  
  }

}
