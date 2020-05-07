import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandsSlidePageRoutingModule } from './hands-slide-routing.module';

import { HandsSlidePage } from './hands-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HandsSlidePageRoutingModule
  ],
  declarations: [HandsSlidePage]
})
export class HandsSlidePageModule {}
