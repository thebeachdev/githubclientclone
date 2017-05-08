import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingPage } from './pricing-page.component';
import { BusinessPage } from './business-page/business-page.component';
import { FreePage } from './free-page/free-page.component';
import { DeveloperPage } from './developer-page/developer-page.component';


const routes: Routes = [
  {
    path: 'pricing',
    component: PricingPage,
  },
  {
    path: 'pricing/business',
    component: BusinessPage
  },
  {
    path:'pricing/freeplan',
    component: FreePage
  },
  {
    path:'pricing/developer',
    component: DeveloperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingPageRoutingModule { }
