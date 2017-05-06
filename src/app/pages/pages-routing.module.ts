import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home-page/home-page.component';
import { AboutPage } from './about-page/about-page.component';
import { ContactPage } from './contact-page/contact-page.component';
import { PricingPage } from './pricing-page/pricing-page.component';
import { LoginPage } from './login-page/login-page.component';
import { NotFoundPage } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path:'',
    component: HomePage
  },
  {
    path: 'about',
    component: AboutPage
  },
  {
    path: 'contact',
    component: ContactPage
  },
  {
    path: 'pricing',
    component: PricingPage
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path:'**',
    component: NotFoundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
