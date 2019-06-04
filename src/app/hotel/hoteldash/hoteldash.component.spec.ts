import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteldashComponent } from './hoteldash.component';

describe('HoteldashComponent', () => {
  let component: HoteldashComponent;
  let fixture: ComponentFixture<HoteldashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoteldashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoteldashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
