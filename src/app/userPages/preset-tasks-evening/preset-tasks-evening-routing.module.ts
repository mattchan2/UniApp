import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresetTasksEveningPage } from './preset-tasks-evening.page';

const routes: Routes = [
  {
    path: '',
    component: PresetTasksEveningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresetTasksEveningPageRoutingModule {}
