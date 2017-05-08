import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreePage } from './free-page/free-page.component';
import { BusinessPage } from './business-page/business-page.component';
import { DeveloperPage } from './developer-page/developer-page.component';
import { PricingPage } from './pricing-page.component';
import { PricingPageRoutingModule } from './pricing-page-routing.module';
import { ComponentsModule } from './components/components.module';
//NOTE: I got imported the WHOLE components module which doens't feel right. I just wanted one component.
// I'm also importing the component into the app module which is why this doesn't seem right.
export const COMPONENTS = [
  FreePage,
  BusinessPage,
  DeveloperPage,
  PricingPage
];
@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    PricingPageRoutingModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class PricingPageModule { }
