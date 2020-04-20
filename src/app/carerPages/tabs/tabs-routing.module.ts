import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  { path: '', redirectTo: 'carer-schedule', pathMatch: 'full' },
  {
    path: '',
    component: TabsPage,
    children: 
    [
      {
        path: 'add-task',
        loadChildren: () => import('../add-task/add-task.module').then( m => m.AddTaskPageModule)
      },
      {
        path: 'carer-schedule',
        loadChildren: () => import('../../carerPages/carer-schedule/carer-schedule.module').then( m => m.CarerSchedulePageModule)
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
