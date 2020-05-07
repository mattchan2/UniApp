import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresetTasksAfternoonPage } from './preset-tasks-afternoon.page';

const routes: Routes = [
  {
    path: '',
    component: PresetTasksAfternoonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresetTasksAfternoonPageRoutingModule {}
