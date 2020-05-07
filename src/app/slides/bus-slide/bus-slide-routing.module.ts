import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusSlidePage } from './bus-slide.page';

const routes: Routes = [
  {
    path: '',
    component: BusSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusSlidePageRoutingModule {}
