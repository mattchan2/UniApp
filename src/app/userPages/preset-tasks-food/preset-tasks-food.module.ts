import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresetTasksFoodPageRoutingModule } from './preset-tasks-food-routing.module';

import { PresetTasksFoodPage } from './preset-tasks-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresetTasksFoodPageRoutingModule
  ],
  declarations: [PresetTasksFoodPage]
})
export class PresetTasksFoodPageModule {}
