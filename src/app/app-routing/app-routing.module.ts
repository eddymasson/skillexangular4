import { AdminDashboard2Component } from './../admin/admin-dashboard2/admin-dashboard2.component';
import { AdminDashboard1Component } from './../admin/admin-dashboard1/admin-dashboard1.component';
import { StarterComponent } from './../starter/starter.component';
import { StarterMyGroupComponent } from './../starter/starter-mygroup/starter-mygroup.component';
//Import des composants liés aux compétences
import { StarterMySkillsComponent } from './../starter/starter-myskills/starter-myskills.component';
import { StarterSearchComponent } from './../starter/starter-search/starter-search.component';
import { StarterListComponent } from './../starter/starter-list/starter-list.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'starter', pathMatch: 'full' },
      { path: 'starter', component: StarterComponent },
      { path: 'mygroup', component: StarterMyGroupComponent },
      { path: 'search', component: StarterSearchComponent },
      { path: 'myskills', component: StarterMySkillsComponent },
      { path: 'list' , component: StarterListComponent}
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
