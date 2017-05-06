import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { PaymentProcessingFormComponent } from './payment-processing-form/payment-processing-form.component';
import { SellingPointsComponent } from './selling-points/selling-points.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

export const COMPONENTS = [
  LoginFormComponent,
  PaymentProcessingFormComponent,
  SellingPointsComponent,
  SignupFormComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class ComponentsModule { }
