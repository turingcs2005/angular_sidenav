import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhysicsRoutingModule } from './physics-routing.module';
import { PhysicsComponent } from './physics.component';


@NgModule({
  declarations: [PhysicsComponent],
  imports: [
    CommonModule,
    PhysicsRoutingModule
  ]
})
export class PhysicsModule { }
