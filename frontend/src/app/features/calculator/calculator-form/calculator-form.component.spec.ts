import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideZonelessChangeDetection } from '@angular/core';

import { CalculatorFormComponent } from './calculator-form.component';
import { CalculationService } from '../../../core/services/calculation.service';

describe('CalculatorFormComponent', () => {
  let component: CalculatorFormComponent;
  let fixture: ComponentFixture<CalculatorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatorFormComponent ],
      imports: [
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        NoopAnimationsModule
      ],
      providers: [ 
        CalculationService,
        provideZonelessChangeDetection()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have invalid form when empty', () => {
    expect(component.calculatorForm.valid).toBeFalsy();
  });

  it('should calculate when form is valid', () => {
    component.calculatorForm.setValue({
      hourlyWage: 10,
      fixedExpenses: 0,
      hoursPerMonth: 160,
      itemPrice: 100
    });
    
    component.calculate();
    
    // 10€/h -> 0.1h/€ -> 100€ * 0.1 = 10h
    expect(component.resultHours).toBeCloseTo(10);
  });
});
