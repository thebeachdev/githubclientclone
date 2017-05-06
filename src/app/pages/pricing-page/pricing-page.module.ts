import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreePage } from './free-page/free-page.component';
import { BusinessPage } from './business-page/business-page.component';
import { DeveloperPage } from './developer-page/developer-page.component';
import { PricingPage } from './pricing-page.component';
import { PricingPageRoutingModule } from './pricing-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PricingPageRoutingModule
  ],
  declarations: [
    FreePage,
    BusinessPage,
    DeveloperPage,
    PricingPage
  ]
})
export class PricingPageModule { }
