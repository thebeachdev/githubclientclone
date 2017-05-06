import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { PaymentProcessingFormComponent } from './payment-processing-form/payment-processing-form.component';
import { SellingPointsComponent } from './selling-points/selling-points.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginFormComponent,
    SignupFormComponent,
    PaymentProcessingFormComponent,
    SellingPointsComponent,
    NavHeaderComponent,
    NavFooterComponent,
  ],
  exports: [
    LoginFormComponent,
    SignupFormComponent,
    PaymentProcessingFormComponent,
    SellingPointsComponent,
    NavHeaderComponent,
    NavFooterComponent
  ]
})
export class ComponentsModule { }
