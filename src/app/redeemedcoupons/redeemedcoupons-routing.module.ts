import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedeemedcouponsPage } from './redeemedcoupons.page';

const routes: Routes = [
  {
    path: '',
    component: RedeemedcouponsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedeemedcouponsPageRoutingModule {}
