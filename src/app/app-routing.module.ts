import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculationResultComponent } from './views/calculation-result/calculation-result.component';
import { SearchComponent } from './views/search/search.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'result', component: CalculationResultComponent },
  { path: '**', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
