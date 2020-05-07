import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresetTasksAfternoonPageRoutingModule } from './preset-tasks-afternoon-routing.module';

import { PresetTasksAfternoonPage } from './preset-tasks-afternoon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresetTasksAfternoonPageRoutingModule
  ],
  declarations: [PresetTasksAfternoonPage]
})
export class PresetTasksAfternoonPageModule {}
