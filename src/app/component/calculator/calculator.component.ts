import { Component } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
    input1: number | null = null;
    input2: number | null = null;
    result: number | null = null;
    error: string | null = null;

    constructor(private calculatorService: CalculatorService) {}

    calculate(operation: string): void {
        this.error = null;
        try {
            switch (operation) {
                case 'add':
                    this.result = this.calculatorService.add(this.input1!, this.input2!);
                    break;
                case 'multiply':
                    this.result = this.calculatorService.multiply(this.input1!, this.input2!);
                    break;
                case 'divide':
                    this.result = this.calculatorService.divide(this.input1!, this.input2!);
                    break;
                default:
                    this.result = null;
            }
        } catch (e) {
            // this.error = e.message;
        }
    }
}
