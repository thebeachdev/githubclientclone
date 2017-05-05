import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreePageComponent } from './free-page/free-page.component';
import { BusinessPageComponent } from './business-page/business-page.component';
import { DeveloperPageComponent } from './developer-page/developer-page.component';
import { PricingPageComponent } from './pricing-page.component';
import { PricingPageRoutingModule } from './pricing-page-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PricingPageRoutingModule
  ],
  declarations: [
    FreePageComponent,
    BusinessPageComponent,
    DeveloperPageComponent,
    PricingPageComponent
  ]
})
export class PricingPageModule { }
