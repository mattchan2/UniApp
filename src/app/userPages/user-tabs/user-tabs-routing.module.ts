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
      {
        path: 'coat-slide',
        loadChildren: () => import('../../slides/coat-slide/coat-slide.module').then( m => m.CoatSlidePageModule)
      },
      {
        path: 'user-settings',
        loadChildren: () => import('../user-settings/user-settings.module').then( m => m.UserSettingsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTabsPageRoutingModule {}
