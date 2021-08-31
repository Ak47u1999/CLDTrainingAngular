import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedcomponentpracticeComponent } from './nestedcomponentpractice.component';

describe('NestedcomponentpracticeComponent', () => {
  let component: NestedcomponentpracticeComponent;
  let fixture: ComponentFixture<NestedcomponentpracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedcomponentpracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedcomponentpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
