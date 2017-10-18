import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id:7,  name: 'Sebastien', Skill : [ { 'Name' : 'Oracle', 'Level': 5 }, { 'Name' : 'Java', 'Level': 2 }],  },
      { id: 11, name: 'Pierre Yves', Skill : [ { 'Name' : 'Java', 'Level': 2 }, { 'Name' : 'Java', 'Level': 1 }],  },
      { id: 12, name: 'Anas' , Skill : [ { 'Name' : 'Java', 'Level': 3 }, { 'Name' : 'Java', 'Level': 2 }],  },
      { id: 13, name: 'Eddy', Skill : [ { 'Name' : 'Java', 'Level': 2 }, { 'Name' : 'Java', 'Level': 2 }],  },
      { id: 14, name: 'Douglas', Skill : [ { 'Name' : 'Java', 'Level': 2 }, { 'Name' : 'Java', 'Level': 5 }],  },
      { id: 15, name: 'Yelan' ,Skill : [ { 'Name' : 'Java', 'Level': 2 }, { 'Name' : 'Java', 'Level': 2 }],  },
      { id: 16, name: 'Melody' , Skill : [ { 'Name' : 'Java', 'Level': 2 }, { 'Name' : 'Java', 'Level': 7 }],  },
    ];
    const skills = [
      {  id: 1, name: 'PHP', libelle :'test', description : 'test', brancheparente : null },
      { id: 2, name: 'typescript', libelle :'test', description : 'test', brancheparente : null },
      {  id:3 , name: 'Javascript', libelle :'test', description : 'test', brancheparente : null },
      {  id: 4, name: 'JAVA', libelle :'test', description : 'test', brancheparente : null},
      {  id: 5, name: 'Management', libelle :'test', description : 'test', brancheparente : null },
      {  id: 6, name: 'Angular', libelle :'test', description : 'test', brancheparente : null },
      {  id: 7, name: 'Oracle', libelle :'test', description : 'test', brancheparente : null}
    ];
    return {users,skills};
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/