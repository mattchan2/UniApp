import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { AuthService } from './auth.service'

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./otherPages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./otherPages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./carerPages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'user-tabs',
    loadChildren: () => import('./userPages/user-tabs/user-tabs.module').then( m => m.UserTabsPageModule),
    //canActivate: [AuthService]
  },
  {
    path: 'preset-tasks-morning',
    loadChildren: () => import('./userPages/preset-tasks-morning/preset-tasks-morning.module').then( m => m.PresetTasksMorningPageModule)
  },
  {
    path: 'tasks-menu',
    loadChildren: () => import('./userPages/tasks-menu/tasks-menu.module').then( m => m.TasksMenuPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
