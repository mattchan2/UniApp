import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SnackSlidePageRoutingModule } from './snack-slide-routing.module';

import { SnackSlidePage } from './snack-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SnackSlidePageRoutingModule
  ],
  declarations: [SnackSlidePage]
})
export class SnackSlidePageModule {}
