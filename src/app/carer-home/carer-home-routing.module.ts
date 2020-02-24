import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarerHomePage } from './carer-home.page';

const routes: Routes = [
  {
    path: '',
    component: CarerHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarerHomePageRoutingModule {}
