import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular/material';

import { CoreRoutingModule } from './core-routing.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';

@NgModule({
  imports: [
    CommonModule,
    MdCardModule,
    CoreRoutingModule
  ],
  declarations: [AboutPageComponent,
                ContactPageComponent,
                PricingPageComponent,
                   HomePageComponent,
                NotFoundPageComponent,
                NavFooterComponent,
                NavHeaderComponent]
})
export class CoreModule { }
