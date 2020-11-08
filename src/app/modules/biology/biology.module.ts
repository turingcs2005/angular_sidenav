import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiologyRoutingModule } from './biology-routing.module';
import { BiologyComponent } from './biology.component';


@NgModule({
  declarations: [BiologyComponent],
  imports: [
    CommonModule,
    BiologyRoutingModule
  ]
})
export class BiologyModule { }
