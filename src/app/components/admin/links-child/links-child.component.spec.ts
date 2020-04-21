import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksChildComponent } from './links-child.component';

describe('LinksChildComponent', () => {
  let component: LinksChildComponent;
  let fixture: ComponentFixture<LinksChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
