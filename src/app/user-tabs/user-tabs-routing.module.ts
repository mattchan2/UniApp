import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserTabsPage } from './user-tabs.page';

const routes: Routes = [
  { path: '', redirectTo: 'user-schedule', pathMatch: 'full' },
  {
    
    path: '',
    component: UserTabsPage,
    children: 
    [
      {
        path: 'user-schedule',
        loadChildren: () => import('../user-schedule/user-schedule.module').then( m => m.UserSchedulePageModule)
      },
      {
        path: 'tasks-menu',
        loadChildren: () => import('../tasks-menu/tasks-menu.module').then( m => m.TasksMenuPageModule)
      },
      {
        path: 'preset-tasks-morning',
        loadChildren: () => import('../preset-tasks-morning/preset-tasks-morning.module').then( m => m.PresetTasksMorningPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTabsPageRoutingModule {}
