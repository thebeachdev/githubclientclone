import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginFormComponent} from './login-form/login-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import {PaymentProcessingFormComponent} from './payment-processing-form/payment-processing-form.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginFormComponent, SignupFormComponent, PaymentProcessingFormComponent, NavHeaderComponent]
})
export class ComponentsModule { }
