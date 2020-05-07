import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LunchSlidePageRoutingModule } from './lunch-slide-routing.module';

import { LunchSlidePage } from './lunch-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LunchSlidePageRoutingModule
  ],
  declarations: [LunchSlidePage]
})
export class LunchSlidePageModule {}
