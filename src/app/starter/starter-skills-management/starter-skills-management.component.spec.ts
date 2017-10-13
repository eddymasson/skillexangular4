import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterSkillsManagementComponent } from './starter-skills-management.component';
 
describe('StarterSkillsManagementComponent', () => {
  let component: StarterSkillsManagementComponent;
  let fixture: ComponentFixture<StarterSkillsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterSkillsManagementComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterSkillsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
