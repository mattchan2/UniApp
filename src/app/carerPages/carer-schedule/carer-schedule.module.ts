import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarerSchedulePageRoutingModule } from './carer-schedule-routing.module';

import { CarerSchedulePage } from './carer-schedule.page';

import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarerSchedulePageRoutingModule,
    ScheduleModule
  ],
  declarations: [CarerSchedulePage]
})
export class CarerSchedulePageModule {}
