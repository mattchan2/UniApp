import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgerSlidePageRoutingModule } from './burger-slide-routing.module';

import { BurgerSlidePage } from './burger-slide.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgerSlidePageRoutingModule
  ],
  declarations: [BurgerSlidePage]
})
export class BurgerSlidePageModule {}
