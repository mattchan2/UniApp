import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreakfastSlidePageRoutingModule } from './breakfast-slide-routing.module';

import { BreakfastSlidePage } from './breakfast-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreakfastSlidePageRoutingModule
  ],
  declarations: [BreakfastSlidePage]
})
export class BreakfastSlidePageModule {}
