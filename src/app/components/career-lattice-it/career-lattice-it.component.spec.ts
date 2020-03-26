/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CareerLatticeItComponent } from './career-lattice-it.component';

describe('HomeItComponent', () => {
  let component: CareerLatticeItComponent;
  let fixture: ComponentFixture<CareerLatticeItComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerLatticeItComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerLatticeItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
