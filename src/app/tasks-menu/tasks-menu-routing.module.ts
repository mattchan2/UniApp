import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksMenuPage } from './tasks-menu.page';

const routes: Routes = [
  {
    path: '',
    component: TasksMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksMenuPageRoutingModule {}
