import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowhotelComponent } from './showhotel.component';

describe('ShowhotelComponent', () => {
  let component: ShowhotelComponent;
  let fixture: ComponentFixture<ShowhotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowhotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
