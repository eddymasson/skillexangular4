import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
//Imports des composants liés aux groupes
import { StarterMyGroupComponent } from './starter/starter-mygroup/starter-mygroup.component';
import { MyGroupMainComponent } from './starter/starter-mygroup/mygroup-main/mygroup-main.component';
//Imports des composants liés aux recherches
import { StarterSearchComponent } from './starter/starter-search/starter-search.component';
import { SearchMainComponent } from './starter/starter-search/search-main/search-main.component';
//Import des composants liés aux compétences
import { StarterMySkillsComponent } from './starter/starter-myskills/starter-myskills.component';
import { MySkillsMainComponent } from './starter/starter-myskills/myskills-main/myskills-main.component';
import { StarterSkillsManagementComponent } from './starter/starter-skills-management/starter-skills-management.component';
import { SkillsManagementMainComponent } from './starter/starter-skills-management/skills-management-main/skills-management-main.component';
import { StarterListComponent } from './starter/starter-list/starter-list.component';
import { ListMainComponent } from './starter/starter-list/list-main/list-main.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminLeftSideComponent } from './admin/admin-left-side/admin-left-side.component';
import { AdminContentComponent } from './admin/admin-content/admin-content.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminControlSidebarComponent } from './admin/admin-control-sidebar/admin-control-sidebar.component';
import { AdminDashboard1Component } from './admin/admin-dashboard1/admin-dashboard1.component';
// import de cool storage gestionnaire de session plus d'infos sur https://github.com/Hacklone/angular2-cool-storage
import { CoolStorageModule } from 'angular2-cool-storage';
import { SelectModule } from 'ng2-select';



@NgModule({
  //Déclaration des divers composants pour pouvoir les utiliser par la suite
  declarations: [
    AppComponent,
    StarterComponent,
    MySkillsMainComponent,
    MyGroupMainComponent,
    SearchMainComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterMyGroupComponent,
    StarterMySkillsComponent,
    StarterSearchComponent,
    StarterControlSidebarComponent,
    StarterListComponent,
    ListMainComponent,
    StarterSkillsManagementComponent,
    SkillsManagementMainComponent
  ],
  imports: [
    //cool storage : import : 
    CoolStorageModule, 
    SelectModule,
    BrowserModule,
    AppRoutingModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
