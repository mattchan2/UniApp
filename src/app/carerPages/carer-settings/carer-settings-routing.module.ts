import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarerSettingsPage } from './carer-settings.page';

const routes: Routes = [
  {
    path: '',
    component: CarerSettingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarerSettingsPageRoutingModule {}
