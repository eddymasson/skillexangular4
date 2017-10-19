import { Component, OnInit } from '@angular/core';
import {User} from '../../../class/user'
import {Skill} from '../../../class/skill'
import {SelectModule} from 'ng2-select';
import {SrvSkillService} from '../../../shared/skill.service'
// Variable in assets/js/scripts.js file
declare var AdminLTE: any;


@Component({
  selector: 'app-list-main',
  templateUrl: './list-main.component.html',
  providers: [SrvSkillService],
})


export class ListMainComponent implements OnInit {
  
  constructor(private skillSrv: SrvSkillService) { 
    
      }
      skills: Skill;
        skillsList: Skill[];
  selectedSkill: Skill;
      add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.skillSrv.create(name)
          .then(skill => {
            this.skillsList.push(skill);
            this.selectedSkill = null;
          });
      }


  role = 'pilote';

    public items:Array<string> = ['C++', 'C#', 'oracle', 'grails',
    'java', 'J2E', '.net', 'Management', 'PERT', 'GANTT',
    ];
 
  private value:any = {};
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
 
  public typed(value:any):void {
    console.log('New search input: ', value);
  }
 
  public refreshValue(value:any):void {
    this.value = value;
  }


  ngOnInit() {

    this.skillSrv.getAllSkills()
    .then(skills=> this.skills = skills);
    // Update the AdminLTE layouts
    AdminLTE.init();
  }

}

