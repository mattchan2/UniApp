import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresetTasksMorningPageRoutingModule } from './preset-tasks-morning-routing.module';

import { PresetTasksMorningPage } from './preset-tasks-morning.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresetTasksMorningPageRoutingModule
  ],
  declarations: [PresetTasksMorningPage]
})
export class PresetTasksMorningPageModule {}
