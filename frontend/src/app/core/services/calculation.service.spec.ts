import {CalculationService} from './calculation.service';

describe('CalculationService', () => {
  let service: CalculationService;

  beforeEach(() => {
    service = new CalculationService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('computeHoursPerEuro', () => {
    it('should return positive hours when net > 0', () => {
      const salary = 3000;
      const monthlyHours = 160;
      const expenses = 1000;
      expect(service.computeHoursPerEuro(salary, monthlyHours, expenses))
        .toBeCloseTo(0.08, 5);
    });

    it('should return 0 when net <= 0', () => {
      expect(service.computeHoursPerEuro(1000, 160, 1000)).toBe(0);
      expect(service.computeHoursPerEuro(500, 160, 1000)).toBe(0);
    });
  });

  describe('computeCostInHours', () => {
    it('should multiply price by hoursPerEuro', () => {
      const hoursPerEuro = 0.1;
      const price = 50;
      expect(service.computeCostInHours(price, hoursPerEuro)).toBe(5);
    });
  });
});
