import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChemistryComponent } from './chemistry.component';

const routes: Routes = [{ path: '', component: ChemistryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChemistryRoutingModule { }
