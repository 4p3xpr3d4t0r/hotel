import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomdashComponent } from './roomdash.component';

describe('RoomdashComponent', () => {
  let component: RoomdashComponent;
  let fixture: ComponentFixture<RoomdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
