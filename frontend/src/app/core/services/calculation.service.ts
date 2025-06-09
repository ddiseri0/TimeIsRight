import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class CalculationService {
  /**
   * Restituisce quante ore di lavoro servono per guadagnare 1 € netto.
   * Se net <= 0, torna 0 per evitare divisione infinita/negativa.
   */
  computeHoursPerEuro(
    salary: number,
    monthlyHours: number,
    fixedExpenses: number
  ): number {
    const net = salary - fixedExpenses;
    return net > 0 ? monthlyHours / net : 0;
  }

  /**
   * Calcola il costo in ore di un item, dato il prezzo e
   * il rapporto ore-per-euro già calcolato.
   */
  computeCostInHours(price: number, hoursPerEuro: number): number {
    return price * hoursPerEuro;
  }
}
