import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusSlidePageRoutingModule } from './bus-slide-routing.module';

import { BusSlidePage } from './bus-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusSlidePageRoutingModule
  ],
  declarations: [BusSlidePage]
})
export class BusSlidePageModule {}
