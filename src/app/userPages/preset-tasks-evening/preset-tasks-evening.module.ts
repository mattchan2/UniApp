import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresetTasksEveningPageRoutingModule } from './preset-tasks-evening-routing.module';

import { PresetTasksEveningPage } from './preset-tasks-evening.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresetTasksEveningPageRoutingModule
  ],
  declarations: [PresetTasksEveningPage]
})
export class PresetTasksEveningPageModule {}
