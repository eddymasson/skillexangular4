import { Component, OnInit } from '@angular/core';
import {User} from '../../../class/user'
import {Skills} from '../../../class/skills'
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;


@Component({
  selector: 'app-mygroup-main',
  templateUrl: './mygroup-main.component.html'
})

export class MyGroupMainComponent implements OnInit {

  users: User[] = [
  { id: 1, name: 'Eddy'},
  { id: 2, name: 'Pierre Yves'},
  { id: 3, name: 'Sebastien'},
  { id: 4, name: 'Yëlan' }

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

  constructor() { 

  }

  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

}



