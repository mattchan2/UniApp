import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandsSlidePage } from './hands-slide.page';

const routes: Routes = [
  {
    path: '',
    component: HandsSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandsSlidePageRoutingModule {}
