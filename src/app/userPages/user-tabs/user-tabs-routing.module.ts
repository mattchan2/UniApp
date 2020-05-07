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
        path: 'preset-tasks-afternoon',
        loadChildren: () => import('../preset-tasks-afternoon/preset-tasks-afternoon.module').then( m => m.PresetTasksAfternoonPageModule)
      },
      {
        path: 'preset-tasks-evening',
        loadChildren: () => import('../preset-tasks-evening/preset-tasks-evening.module').then( m => m.PresetTasksEveningPageModule)
      },
      {
        path: 'preset-tasks-food',
        loadChildren: () => import('../preset-tasks-food/preset-tasks-food.module').then( m => m.PresetTasksFoodPageModule)
      },
      {
        path: 'preset-tasks-travel',
        loadChildren: () => import('../preset-tasks-travel/preset-tasks-travel.module').then( m => m.PresetTasksTravelPageModule)
      },
      {
        path: 'coat-slide',
        loadChildren: () => import('../../slides/coat-slide/coat-slide.module').then( m => m.CoatSlidePageModule)
      },
      {
        path: 'user-settings',
        loadChildren: () => import('../user-settings/user-settings.module').then( m => m.UserSettingsPageModule)
      },
      {
        path: 'breakfast-slide',
        loadChildren: () => import('../../slides/breakfast-slide/breakfast-slide.module').then( m => m.BreakfastSlidePageModule)
      },
      {
        path: 'lunch-slide',
        loadChildren: () => import('../../slides/lunch-slide/lunch-slide.module').then( m => m.LunchSlidePageModule)
      },
      {
        path: 'dinner-slide',
        loadChildren: () => import('../../slides/dinner-slide/dinner-slide.module').then( m => m.DinnerSlidePageModule)
      },
      {
        path: 'snack-slide',
        loadChildren: () => import('../../slides/snack-slide/snack-slide.module').then( m => m.SnackSlidePageModule)
      },
      {
        path: 'work-slide',
        loadChildren: () => import('../../slides/work-slide/work-slide.module').then( m => m.WorkSlidePageModule)
      },
      {
        path: 'bus-slide',
        loadChildren: () => import('../../slides/bus-slide/bus-slide.module').then( m => m.BusSlidePageModule)
      },
      {
        path: 'school-slide',
        loadChildren: () => import('../../slides/school-slide/school-slide.module').then( m => m.SchoolSlidePageModule)
      },
      {
        path: 'food-dinner',
        loadChildren: () => import('../food-dinner/food-dinner.module').then( m => m.FoodDinnerPageModule)
      },
      {
        path: 'burger-slide',
        loadChildren: () => import('../../slides/burger-slide/burger-slide.module').then( m => m.BurgerSlidePageModule)
      },
      {
        path: 'toad-slide',
        loadChildren: () => import('../../slides/toad-slide/toad-slide.module').then( m => m.ToadSlidePageModule)
      },
      {
        path: 'hands-slide',
        loadChildren: () => import('../../slides/hands-slide/hands-slide.module').then( m => m.HandsSlidePageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserTabsPageRoutingModule {}
