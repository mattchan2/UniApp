import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserSchedulePageRoutingModule } from './user-schedule-routing.module';

import { UserSchedulePage } from './user-schedule.page';

import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserSchedulePageRoutingModule,
    ScheduleModule
  ],
  declarations: [UserSchedulePage]
})
export class UserSchedulePageModule {}
