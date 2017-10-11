import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starter-left-side',
  templateUrl: './starter-left-side.component.html',
  styleUrls: ['./starter-left-side.component.css']
})
export class StarterLeftSideComponent implements OnInit {
  user = {
    name:"Eddy",
    role: "maitre",
    lastname:"Masson"
  }
  role = "pilote";
  constructor() { }

  ngOnInit() {
  }

}
