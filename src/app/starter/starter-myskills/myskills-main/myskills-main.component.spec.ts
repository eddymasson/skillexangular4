import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySkillsMainComponent } from './myskills-main.component';

describe('MySkillsMainComponent', () => {
  let component: MySkillsMainComponent;
  let fixture: ComponentFixture<MySkillsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySkillsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySkillsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
