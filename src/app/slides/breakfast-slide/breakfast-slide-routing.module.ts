import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreakfastSlidePage } from './breakfast-slide.page';

const routes: Routes = [
  {
    path: '',
    component: BreakfastSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreakfastSlidePageRoutingModule {}
