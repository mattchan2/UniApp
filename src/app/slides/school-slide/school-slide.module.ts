import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchoolSlidePageRoutingModule } from './school-slide-routing.module';

import { SchoolSlidePage } from './school-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchoolSlidePageRoutingModule
  ],
  declarations: [SchoolSlidePage]
})
export class SchoolSlidePageModule {}
