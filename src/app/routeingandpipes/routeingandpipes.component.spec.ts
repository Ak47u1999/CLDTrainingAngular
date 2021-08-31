import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteingandpipesComponent } from './routeingandpipes.component';

describe('RouteingandpipesComponent', () => {
  let component: RouteingandpipesComponent;
  let fixture: ComponentFixture<RouteingandpipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteingandpipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteingandpipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
