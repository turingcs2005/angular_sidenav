import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhysicsComponent } from './physics.component';

const routes: Routes = [{ path: '', component: PhysicsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhysicsRoutingModule { }
