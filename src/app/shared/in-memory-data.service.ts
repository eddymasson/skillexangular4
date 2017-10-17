import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id:7,  name: 'Sebastien' },
      { id: 11, name: 'Pierre Yves' },
      { id: 12, name: 'Anas' },
      { id: 13, name: 'Eddy' },
      { id: 14, name: 'Douglas' },
      { id: 15, name: 'Yelan' },
      { id: 16, name: 'Melody' }
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