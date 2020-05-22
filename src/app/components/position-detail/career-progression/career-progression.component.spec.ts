import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerProgressionComponent } from './career-progression.component';

describe('CareerProgressionComponent', () => {
  let component: CareerProgressionComponent;
  let fixture: ComponentFixture<CareerProgressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerProgressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerProgressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
