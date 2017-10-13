import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsManagementMainComponent } from './skills-management-main.component';

describe('SkillsManagementMainComponent', () => {
  let component: SkillsManagementMainComponent;
  let fixture: ComponentFixture<SkillsManagementMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsManagementMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsManagementMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
