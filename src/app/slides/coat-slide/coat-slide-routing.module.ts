import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoatSlidePage } from './coat-slide.page';

const routes: Routes = [
  {
    path: '',
    component: CoatSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoatSlidePageRoutingModule {}
