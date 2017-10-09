import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGroupMainComponent } from './mygroup-main.component';

describe('MyGroupMainComponent', () => {
  let component: MyGroupMainComponent;
  let fixture: ComponentFixture<MyGroupMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGroupMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGroupMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
