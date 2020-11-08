import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChemistryRoutingModule } from './chemistry-routing.module';
import { ChemistryComponent } from './chemistry.component';


@NgModule({
  declarations: [ChemistryComponent],
  imports: [
    CommonModule,
    ChemistryRoutingModule
  ]
})
export class ChemistryModule { }
