import { TestBed } from '@angular/core/testing';
import { provideZonelessChangeDetection } from '@angular/core';

import { CalculationService } from './calculation.service';

describe('CalculationService', () => {
  let service: CalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection()]
    });
    service = TestBed.inject(CalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('computeHoursPerEuro', () => {
    it('should calculate hours per euro correctly without expenses', () => {
      // 10€/hour -> 0.1 hours for 1€
      expect(service.computeHoursPerEuro(10)).toBeCloseTo(0.1);
    });

    it('should calculate hours per euro correctly with expenses', () => {
      // 20€/hour, 1600€ expenses, 160 hours/month
      // Expenses per hour = 1600 / 160 = 10€
      // Effective wage = 20 - 10 = 10€
      // Hours per euro = 1 / 10 = 0.1
      expect(service.computeHoursPerEuro(20, 1600, 160)).toBeCloseTo(0.1);
    });

    it('should return Infinity if expenses exceed income', () => {
      expect(service.computeHoursPerEuro(10, 2000, 160)).toBe(Infinity);
    });

    it('should throw error for zero or negative wage', () => {
      expect(() => service.computeHoursPerEuro(0)).toThrowError();
      expect(() => service.computeHoursPerEuro(-5)).toThrowError();
    });
  });

  describe('computeCostInHours', () => {
    it('should calculate cost in hours correctly', () => {
      // 0.1 hours/euro * 100€ = 10 hours
      expect(service.computeCostInHours(0.1, 100)).toBeCloseTo(10);
    });

    it('should return 0 for free items', () => {
      expect(service.computeCostInHours(0.1, 0)).toBe(0);
    });
  });
});
