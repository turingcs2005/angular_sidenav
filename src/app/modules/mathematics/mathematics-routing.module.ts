import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MathematicsComponent } from './mathematics.component';

const routes: Routes = [{ path: '', component: MathematicsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MathematicsRoutingModule { }
