import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarerSchedulePage } from './carer-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: CarerSchedulePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarerSchedulePageRoutingModule {}
