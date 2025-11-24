import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalculationService } from '../../../core/services/calculation.service';

@Component({
    selector: 'app-calculator-form',
    templateUrl: './calculator-form.component.html',
    styleUrls: ['./calculator-form.component.scss'],
    standalone: false
})
export class CalculatorFormComponent implements OnInit {
    calculatorForm: FormGroup;
    resultHours: number | null = null;
    hoursPerEuro: number | null = null;
    protected readonly Infinity = Infinity;

    constructor(
        private fb: FormBuilder,
        private calculationService: CalculationService
    ) {
        this.calculatorForm = this.fb.group({
            hourlyWage: [null, [Validators.required, Validators.min(0.1)]],
            fixedExpenses: [0, [Validators.min(0)]],
            hoursPerMonth: [160, [Validators.required, Validators.min(1)]],
            itemPrice: [null, [Validators.required, Validators.min(0)]]
        });
    }

    ngOnInit(): void {
        // React to form changes if needed, or just calculate on submit
    }

    calculate(): void {
        if (this.calculatorForm.valid) {
            const { hourlyWage, fixedExpenses, hoursPerMonth, itemPrice } = this.calculatorForm.value;

            try {
                this.hoursPerEuro = this.calculationService.computeHoursPerEuro(hourlyWage, fixedExpenses, hoursPerMonth);

                if (this.hoursPerEuro === Infinity) {
                    this.resultHours = Infinity;
                } else {
                    this.resultHours = this.calculationService.computeCostInHours(this.hoursPerEuro, itemPrice);
                }
            } catch (e) {
                console.error(e);
                this.resultHours = null;
            }
        }
    }
}
