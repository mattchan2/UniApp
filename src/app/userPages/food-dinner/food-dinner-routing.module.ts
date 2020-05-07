import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoodDinnerPage } from './food-dinner.page';

const routes: Routes = [
  {
    path: '',
    component: FoodDinnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoodDinnerPageRoutingModule {}
