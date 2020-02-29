import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclickComponent } from './ngclick.component';

describe('NgclickComponent', () => {
  let component: NgclickComponent;
  let fixture: ComponentFixture<NgclickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgclickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgclickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
