import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerSlidePage } from './burger-slide.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerSlidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerSlidePageRoutingModule {}
