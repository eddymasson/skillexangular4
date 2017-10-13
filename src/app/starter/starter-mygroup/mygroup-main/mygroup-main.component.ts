import { Component, OnInit } from '@angular/core';
// import du module de stockage session cool-storage 
import { CoolLocalStorage } from 'angular2-cool-storage';

import {User} from '../../../class/user'
import {Skills} from '../../../class/skills'
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;


@Component({
  selector: 'app-mygroup-main',
  templateUrl: './mygroup-main.component.html'
})

export class MyGroupMainComponent implements OnInit {

  localStorage: CoolLocalStorage;
  constructor(localStorage: CoolLocalStorage) {
    this.localStorage = localStorage;   
}
  users: User[] = [
  { id: 1, name: 'Eddy'},
  { id: 2, name: 'Pierre Yves'},

  {id : 7, name : 'Geoffrey'},
  
  ];


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

  ngOnInit() {
    //Définition de la variable de session 
      this.localStorage.setItem('itemKey', ('pilote'));
        //on affiche l'item de session 
        console.log(this.localStorage.getItem('itemKey'));
        
        this.localStorage.setObject('users', {
          role:'pilote'});
          console.log(this.localStorage.getItem('users'));
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

}