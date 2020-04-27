import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarerSettingsPageRoutingModule } from './carer-settings-routing.module';

import { CarerSettingsPage } from './carer-settings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarerSettingsPageRoutingModule
  ],
  declarations: [CarerSettingsPage]
})
export class CarerSettingsPageModule {}
