import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Available2PageRoutingModule } from './available2-routing.module';

import { Available2Page } from './available2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Available2PageRoutingModule
  ],
  declarations: [Available2Page]
})
export class Available2PageModule {}
