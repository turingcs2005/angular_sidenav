import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MathematicsRoutingModule } from './mathematics-routing.module';
import { MathematicsComponent } from './mathematics.component';


@NgModule({
  declarations: [MathematicsComponent],
  imports: [
    CommonModule,
    MathematicsRoutingModule
  ]
})
export class MathematicsModule { }
