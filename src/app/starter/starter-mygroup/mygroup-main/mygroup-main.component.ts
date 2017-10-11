import { Component, OnInit } from '@angular/core';

// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

export class User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-mygroup-main',
  templateUrl: './mygroup-main.component.html'
})

export class MyGroupMainComponent implements OnInit {

  users: User[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' }
  ];


  constructor() { 

  }

// Classe user
user = {
  name:"Eddy",
  role:"maitre",
  lastname:"Masson",
  job:"Développeur"
}
  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

}



