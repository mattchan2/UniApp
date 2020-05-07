import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodDinnerPageRoutingModule } from './food-dinner-routing.module';

import { FoodDinnerPage } from './food-dinner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodDinnerPageRoutingModule
  ],
  declarations: [FoodDinnerPage]
})
export class FoodDinnerPageModule {}
