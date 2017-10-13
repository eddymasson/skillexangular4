import { Component, OnInit } from '@angular/core';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({

  selector: 'app-skills-management-main',
  templateUrl: './skills-management-main.component.html'
})
export class SkillsManagementMainComponent implements OnInit {

  constructor() { }

  user = {
    name:'Eddy',
    lastname:'Masson',
    role:'maitre',
    job:'Developpeur'
  }


  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

}
