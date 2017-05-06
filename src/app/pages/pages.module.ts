import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module'
import { PagesRoutingModule } from './pages-routing.module';
import { AboutPage } from './about-page/about-page.component';
import { ContactPage } from './contact-page/contact-page.component';
import { HomePage } from './home-page/home-page.component';
import { NotFoundPage } from './not-found-page/not-found-page.component';
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
    HomePage,
    NotFoundPage,
    LoginPage,
  ],
  exports: [
    ComponentsModule
  ],
})
export class PagesModule { }
