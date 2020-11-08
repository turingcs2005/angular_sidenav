import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiologyComponent } from './biology.component';

const routes: Routes = [{ path: '', component: BiologyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BiologyRoutingModule { }
