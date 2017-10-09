import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterMyGroupComponent } from './starter-mygroup.component';
 
describe('StarterMyGroupComponent', () => {
  let component: StarterMyGroupComponent;
  let fixture: ComponentFixture<StarterMyGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterMyGroupComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterMyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
