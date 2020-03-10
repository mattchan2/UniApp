import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
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
        path: 'user-schedule',
        loadChildren: () => import('../user-schedule/user-schedule.module').then( m => m.UserSchedulePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
