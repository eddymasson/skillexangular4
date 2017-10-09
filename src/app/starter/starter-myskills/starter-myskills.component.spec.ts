import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterMySkillsComponent } from './starter-myskills.component';
 
describe('StarterMySkillsComponent', () => {
  let component: StarterMySkillsComponent;
  let fixture: ComponentFixture<StarterMySkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterMySkillsComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterMySkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
