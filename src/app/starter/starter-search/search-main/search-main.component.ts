import { Component, OnInit } from '@angular/core';
import {User} from '../../../class/user'
import {Skill} from '../../../class/skill'
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;


@Component({
  selector: 'app-search-main',
  templateUrl: './search-main.component.html',
})

export class SearchMainComponent implements OnInit {




  constructor() { 

  }

  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

}



