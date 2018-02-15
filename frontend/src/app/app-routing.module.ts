import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {ClsftComponent} from "./clsft/clsft.component";



const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'clsft', component: ClsftComponent },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
