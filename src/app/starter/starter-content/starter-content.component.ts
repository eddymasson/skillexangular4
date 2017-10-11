import { Component, OnInit } from '@angular/core';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-starter-content',
  templateUrl: './starter-content.component.html',
  styleUrls: ['./starter-content.component.css']
})
export class StarterContentComponent implements OnInit {

  constructor() { }

  user = {
    name:"Eddy",
    role:"maitre",
    lastname:"Masson"
  }
  
  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

}
