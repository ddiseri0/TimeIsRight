import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CalculatorFormComponent } from './calculator-form/calculator-form.component';

const routes: Routes = [
  { path: '', component: CalculatorFormComponent }
];

@NgModule({
  declarations: [
    CalculatorFormComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class CalculatorModule {
}
