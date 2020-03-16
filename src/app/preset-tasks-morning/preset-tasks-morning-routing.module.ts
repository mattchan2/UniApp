import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresetTasksMorningPage } from './preset-tasks-morning.page';

const routes: Routes = [
  {
    path: '',
    component: PresetTasksMorningPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresetTasksMorningPageRoutingModule {}
