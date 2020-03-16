import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoatSlidePageRoutingModule } from './coat-slide-routing.module';

import { CoatSlidePage } from './coat-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoatSlidePageRoutingModule
  ],
  declarations: [CoatSlidePage]
})
export class CoatSlidePageModule {}
