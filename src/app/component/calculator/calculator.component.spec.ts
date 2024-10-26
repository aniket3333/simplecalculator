// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { CalculatorComponent } from './calculator.component';

// describe('CalculatorComponent', () => {
//   let component: CalculatorComponent;
//   let fixture: ComponentFixture<CalculatorComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [CalculatorComponent]
//     });
//     fixture = TestBed.createComponent(CalculatorComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });




import { TestBed } from '@angular/core/testing';
import { CalculatorService } from 'src/app/services/calculator.service';

describe('CalculatorService', () => {
    let service: CalculatorService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CalculatorService);
    });

    it('should add two numbers', () => {
        expect(service.add(2, 3)).toEqual(5);
    });

    it('should multiply two numbers', () => {
        expect(service.multiply(2, 3)).toEqual(6);
    });

    it('should divide two numbers', () => {
        expect(service.divide(6, 3)).toEqual(2);
    });

    it('should throw error when dividing by zero', () => {
        expect(() => service.divide(6, 0)).toThrowError('Cannot divide by zero');
    });
});

