import { Component, OnInit } from '@angular/core';
import { StarterComponent } from '../starter.component';
@Component({
  selector: 'app-starter-list',
  templateUrl: './starter-list.component.html'
})
export class StarterListComponent implements OnInit {

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];

  constructor() { }

  role = 'pilote';

  ngOnInit() {
    // add the the body classes
    this.body.classList.add('skin-blue');
    this.body.classList.add('sidebar-mini');
  }

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('skin-blue');
    this.body.classList.remove('sidebar-mini');
  }
}
