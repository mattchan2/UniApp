import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkSlidePageRoutingModule } from './work-slide-routing.module';

import { WorkSlidePage } from './work-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkSlidePageRoutingModule
  ],
  declarations: [WorkSlidePage]
})
export class WorkSlidePageModule {}
