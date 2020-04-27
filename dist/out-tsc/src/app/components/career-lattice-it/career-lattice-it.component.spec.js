/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { CareerLatticeItComponent } from './career-lattice-it.component';
describe('HomeItComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CareerLatticeItComponent]
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
//# sourceMappingURL=career-lattice-it.component.spec.js.map