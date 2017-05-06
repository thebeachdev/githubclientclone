import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PricingPageComponent } from './pricing-page.component';
import { BusinessPageComponent } from './business-page/business-page.component';
import { FreePageComponent } from './free-page/free-page.component';
import { DeveloperPageComponent } from './developer-page/developer-page.component';


const routes: Routes = [
  {
    path: 'pricing',
    component: PricingPageComponent,
    children: [
      {
        path: 'business',
        component: BusinessPageComponent
      },
      {
        path:'freeplan',
        component: FreePageComponent
      },
      {
        path:'developer',
        component: DeveloperPageComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PricingPageRoutingModule { }
