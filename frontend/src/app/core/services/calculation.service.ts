import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  constructor() { }

  /**
   * Calculates how many hours of work are needed to earn 1 Euro net.
   * @param hourlyWage Net hourly wage in Euros.
   * @param fixedExpenses Monthly fixed expenses in Euros (optional).
   * @param hoursPerMonth Total working hours per month (optional, default 160).
   * @returns Hours needed to earn 1 Euro.
   */
  computeHoursPerEuro(hourlyWage: number, fixedExpenses: number = 0, hoursPerMonth: number = 160): number {
    if (hourlyWage <= 0) {
      throw new Error('Hourly wage must be greater than zero.');
    }

    // Calculate effective hourly wage after expenses
    // Expenses are spread over the working hours
    const expensesPerHour = fixedExpenses / hoursPerMonth;
    const effectiveHourlyWage = hourlyWage - expensesPerHour;

    if (effectiveHourlyWage <= 0) {
      // If expenses exceed income, it's impossible to afford anything
      // Return Infinity or throw error? Let's return Infinity for now to indicate "never".
      return Infinity;
    }

    return 1 / effectiveHourlyWage;
  }

  /**
   * Calculates the cost of an item in working hours.
   * @param hoursPerEuro Hours needed to earn 1 Euro.
   * @param itemPrice Price of the item in Euros.
   * @returns Total hours of work needed.
   */
  computeCostInHours(hoursPerEuro: number, itemPrice: number): number {
    if (hoursPerEuro < 0 || itemPrice < 0) {
      throw new Error('Values must be non-negative.');
    }
    return hoursPerEuro * itemPrice;
  }
}
