import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';
import { URLSearchParams, } from '@angular/http';
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-starter-content',
  templateUrl: './starter-content.component.html',
  styleUrls: ['./starter-content.component.css']
})
export class StarterContentComponent implements OnInit {

  user = this.route.snapshot.queryParams["user"];
  team = this.route.snapshot.queryParams["id_team"];
  role = this.route.snapshot.queryParams["role"];

  constructor(private route: ActivatedRoute) {


   }

  ngOnInit() {
    // Update the AdminLTE layouts

 
  
  }

}
