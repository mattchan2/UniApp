import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToadSlidePageRoutingModule } from './toad-slide-routing.module';

import { ToadSlidePage } from './toad-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToadSlidePageRoutingModule
  ],
  declarations: [ToadSlidePage]
})
export class ToadSlidePageModule {}
