import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterSearchComponent } from './starter-search.component';
 
describe('StarterSearchComponent', () => {
  let component: StarterSearchComponent;
  let fixture: ComponentFixture<StarterSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarterSearchComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
