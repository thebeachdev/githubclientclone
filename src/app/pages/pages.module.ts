import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module'
import { PagesRoutingModule } from './pages-routing.module';
import { AboutPage } from './about-page/about-page.component';
import { ContactPage } from './contact-page/contact-page.component';
import { PricingPage } from './pricing-page/pricing-page.component';
import { HomePage } from './home-page/home-page.component';
import { NotFoundPage } from './not-found-page/not-found-page.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { LoginPage } from './login-page/login-page.component';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    PagesRoutingModule
  ],
  declarations: [
    AboutPage,
    ContactPage,
    PricingPage,
    HomePage,
    NotFoundPage,
    NavHeaderComponent,
    NavFooterComponent,
    LoginPage,
  ],
  exports: [
    NavHeaderComponent,
    NavFooterComponent
  ],
})
export class PagesModule { }
