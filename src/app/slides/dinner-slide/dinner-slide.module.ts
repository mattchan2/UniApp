import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinnerSlidePageRoutingModule } from './dinner-slide-routing.module';

import { DinnerSlidePage } from './dinner-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DinnerSlidePageRoutingModule
  ],
  declarations: [DinnerSlidePage]
})
export class DinnerSlidePageModule {}
