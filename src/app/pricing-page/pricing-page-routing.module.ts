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
    children: [
      {
        path: 'business',
        component: BusinessPage
      },
      {
        path:'freeplan',
        component: FreePage
      },
      {
        path:'developer',
        component: DeveloperPage
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingPageRoutingModule { }
