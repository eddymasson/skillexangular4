import { Component, OnInit } from '@angular/core';
import {User} from '../../../class/user'
import {Skills} from '../../../class/skills'
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;


@Component({
  selector: 'app-search-main',
  templateUrl: './search-main.component.html'
})

export class SearchMainComponent implements OnInit {

  users: User[] = [
  { id: 1, name: 'Eddy'},
  { id: 2, name: 'Pierre Yves'},
  { id: 3, name: 'Sebastien'},
  { id: 4, name: 'Yëlan' }

  ];

  myskills: Skills[] = [
    { id: 1, name: 'PHP', level:3},
    { id: 2, name: 'Oracle', level:3}
    ];
  

  constructor() { 

  }

  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

}



