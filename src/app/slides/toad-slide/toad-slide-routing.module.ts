import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToadSlidePage } from './toad-slide.page';

const routes: Routes = [
  {
    path: '',
    component: ToadSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToadSlidePageRoutingModule {}
