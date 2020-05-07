import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresetTasksTravelPageRoutingModule } from './preset-tasks-travel-routing.module';

import { PresetTasksTravelPage } from './preset-tasks-travel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresetTasksTravelPageRoutingModule
  ],
  declarations: [PresetTasksTravelPage]
})
export class PresetTasksTravelPageModule {}
