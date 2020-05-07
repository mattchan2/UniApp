import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresetTasksFoodPage } from './preset-tasks-food.page';

const routes: Routes = [
  {
    path: '',
    component: PresetTasksFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresetTasksFoodPageRoutingModule {}
