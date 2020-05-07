import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkSlidePage } from './work-slide.page';

const routes: Routes = [
  {
    path: '',
    component: WorkSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkSlidePageRoutingModule {}
