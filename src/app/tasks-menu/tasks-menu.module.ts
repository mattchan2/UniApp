import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasksMenuPageRoutingModule } from './tasks-menu-routing.module';

import { TasksMenuPage } from './tasks-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksMenuPageRoutingModule
  ],
  declarations: [TasksMenuPage]
})
export class TasksMenuPageModule {}
