import { Component, OnInit } from '@angular/core';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({

  selector: 'app-myskills-main',
  templateUrl: './myskills-main.component.html'
})
export class MySkillsMainComponent implements OnInit {
  title = 'Compétences';
  role = 'pilote';
  constructor() { }

  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

}
