import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LunchSlidePage } from './lunch-slide.page';

const routes: Routes = [
  {
    path: '',
    component: LunchSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LunchSlidePageRoutingModule {}
