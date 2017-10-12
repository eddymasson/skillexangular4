import { Component, OnInit } from '@angular/core';
import {User} from '../../../class/user'
import {Skills} from '../../../class/skills'

// Variable in assets/js/scripts.js file
declare var AdminLTE: any;


@Component({
  selector: 'app-list-main',
  templateUrl: './list-main.component.html'
})

export class ListMainComponent implements OnInit {

  role = 'pilote';

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
  
    public items:Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
    'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
    'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin', 'Düsseldorf',
    'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg', 'Hamburg', 'Hannover',
    'Helsinki', 'Leeds', 'Leipzig', 'Lisbon', 'Łódź', 'London', 'Kraków', 'Madrid',
    'Málaga', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Naples', 'Palermo',
    'Paris', 'Poznań', 'Prague', 'Riga', 'Rome', 'Rotterdam', 'Seville', 'Sheffield',
    'Sofia', 'Stockholm', 'Stuttgart', 'The Hague', 'Turin', 'Valencia', 'Vienna',
    'Vilnius', 'Warsaw', 'Wrocław', 'Zagreb', 'Zaragoza'];
 
  private value:any = ['Athens'];
  private _disabledV:string = '0';
  private disabled:boolean = false;
 
  private get disabledV():string {
    return this._disabledV;
  }
 
  private set disabledV(value:string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }
 
  public selected(value:any):void {
    console.log('Selected value is: ', value);
  }
 
  public removed(value:any):void {
    console.log('Removed value is: ', value);
  }
 
  public refreshValue(value:any):void {
    this.value = value;
  }
 
  public itemsToString(value:Array<any> = []):string {
    return value
      .map((item:any) => {
        return item.text;
      }).join(',');
  }

  constructor() { 

  }

  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

}



