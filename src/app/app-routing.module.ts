import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'help', component: HelpComponent },
  { path: 'chemistry', loadChildren: () => import('./modules/chemistry/chemistry.module').then(m => m.ChemistryModule) }, 
  { path: 'physics', loadChildren: () => import('./modules/physics/physics.module').then(m => m.PhysicsModule) }, 
  { path: 'mathematics', loadChildren: () => import('./modules/mathematics/mathematics.module').then(m => m.MathematicsModule) },
  { path: 'biology', loadChildren: () => import('./modules/biology/biology.module').then(m => m.BiologyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
