import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauDetailComponent } from './restau-detail.component';

describe('RestauDetailComponent', () => {
  let component: RestauDetailComponent;
  let fixture: ComponentFixture<RestauDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
