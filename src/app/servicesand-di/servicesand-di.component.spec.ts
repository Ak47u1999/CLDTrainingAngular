import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesandDIComponent } from './servicesand-di.component';

describe('ServicesandDIComponent', () => {
  let component: ServicesandDIComponent;
  let fixture: ComponentFixture<ServicesandDIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicesandDIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesandDIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
