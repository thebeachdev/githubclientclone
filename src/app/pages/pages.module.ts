import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module'
import { PagesRoutingModule } from './pages-routing.module';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { LoginPageComponent } from './login-page/login-page.component';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    PricingPageComponent,
    HomePageComponent,
    NotFoundPageComponent,
    NavHeaderComponent,
    NavFooterComponent,
    LoginPageComponent,
  ],
  exports: [
    NavHeaderComponent,
    NavFooterComponent
  ],
})
export class PagesModule { }
