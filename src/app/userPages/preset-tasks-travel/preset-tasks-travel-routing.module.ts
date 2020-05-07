import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresetTasksTravelPage } from './preset-tasks-travel.page';

const routes: Routes = [
  {
    path: '',
    component: PresetTasksTravelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresetTasksTravelPageRoutingModule {}
