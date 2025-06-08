import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'calculator',
    loadChildren: () =>
      import('./features/calculator/calculator-module')
        .then(m => m.CalculatorModule)
  },
  {path: '', redirectTo: 'calculator', pathMatch: 'full'},
  {path: '**', redirectTo: 'calculator'},
];
