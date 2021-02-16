import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Available2Page } from './available2.page';

const routes: Routes = [
  {
    path: '',
    component: Available2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Available2PageRoutingModule {}
