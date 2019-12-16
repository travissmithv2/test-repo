import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BusinessComponent} from './business/business.component';
import {LandingPageComponent} from './landing-page/landing-page.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'business', component: BusinessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
