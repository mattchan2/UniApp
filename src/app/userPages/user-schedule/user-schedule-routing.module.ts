import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserSchedulePage } from './user-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: UserSchedulePage
  },
  {
    path: 'update-task/:id',
    loadChildren: () => import('../../carerPages/update-task/update-task.module').then( m => m.UpdateTaskPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSchedulePageRoutingModule {}
