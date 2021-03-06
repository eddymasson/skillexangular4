import { Component, OnInit } from '@angular/core';
import { User } from '../../../class/user'
import { Skill } from '../../../class/skill'
import { SelectModule } from 'ng2-select';
import { SrvSkillService } from '../../../shared/skill.service'
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
  skills: Skill[] = [];

  selectedSkill: Skill;
//Ajout d'une compétence utilisateur dans la liste 
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.skillSrv.create(name)
      .then(skill => {
        this.skills.push(skill);
        this.selectedSkill = null;
      });
  }
  //Récupération de toutes les compétences 
  getAllSkills(): void {
    this.skillSrv
      .getAllSkills()
      .then(skills => this.skills = skills);
  }

  role = 'pilote';
// liste déroulante utilisé dans select 2 à remplacer par celle de l'api des compétences 
  public items: Array<string> = ['C++', 'C#', 'oracle', 'grails',
    'java', 'J2E', '.net', 'Management', 'PERT', 'GANTT',
  ];

  //fonctions préconfiguré de select 2 (à supprimer si non utilisés
  private value: any = {};
  private _disabledV: string = '0';
  private disabled: boolean = false;

  private get disabledV(): string {
    return this._disabledV;
  }

  private set disabledV(value: string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  //ajout d'une compétence dans la liste au clic sur select 2 
  public selected(value: any): void {
    console.log(value.id);
    if (!value.id) { return; }
    this.skillSrv.create(value.id)
      .then(skill => {
        this.skills.push(skill);
        this.selectedSkill = null;
      });

    console.log('Selected value is: ', value);
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public typed(value: any): void {
    console.log('New search input: ', value);
  }

  public refreshValue(value: any): void {
    this.value = value;
  }


  ngOnInit(): void {
    this.getAllSkills();

    // Update the AdminLTE layouts

    AdminLTE.init();
  }

}

