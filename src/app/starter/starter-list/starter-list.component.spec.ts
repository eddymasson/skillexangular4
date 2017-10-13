import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterListComponent } from './starter-list.component';
 
describe('StarterListComponent', () => {
  let component: StarterListComponent;
  let fixture: ComponentFixture<StarterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterListComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
