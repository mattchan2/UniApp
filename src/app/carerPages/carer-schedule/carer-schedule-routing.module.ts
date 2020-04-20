import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarerSchedulePage } from './carer-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: CarerSchedulePage
  },
  {
    path: 'update-task/:id',
    loadChildren: () => import('../update-task/update-task.module').then( m => m.UpdateTaskPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarerSchedulePageRoutingModule {}
