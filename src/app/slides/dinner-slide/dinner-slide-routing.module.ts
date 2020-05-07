import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinnerSlidePage } from './dinner-slide.page';

const routes: Routes = [
  {
    path: '',
    component: DinnerSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinnerSlidePageRoutingModule {}
