import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedeemedcouponsPageRoutingModule } from './redeemedcoupons-routing.module';

import { RedeemedcouponsPage } from './redeemedcoupons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedeemedcouponsPageRoutingModule
  ],
  declarations: [RedeemedcouponsPage]
})
export class RedeemedcouponsPageModule {}
