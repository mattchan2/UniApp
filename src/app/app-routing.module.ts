import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { AuthService } from './auth.service'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'user-tabs',
    loadChildren: () => import('./user-tabs/user-tabs.module').then( m => m.UserTabsPageModule),
    //canActivate: [AuthService]
  },
  {
    path: 'preset-tasks-morning',
    loadChildren: () => import('./preset-tasks-morning/preset-tasks-morning.module').then( m => m.PresetTasksMorningPageModule)
  },
  {
    path: 'tasks-menu',
    loadChildren: () => import('./tasks-menu/tasks-menu.module').then( m => m.TasksMenuPageModule)
  },
  {
    path: 'coat-slide',
    loadChildren: () => import('./coat-slide/coat-slide.module').then( m => m.CoatSlidePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
