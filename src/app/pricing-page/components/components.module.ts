import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentProcessingFormComponent } from './payment-processing-form/payment-processing-form.component';
import { SellingPointsComponent } from './selling-points/selling-points.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FreePlanColumnComponent } from './free-plan-column/free-plan-column.component';
import { DeveloperPlanColumnComponent } from './developer-plan-column/developer-plan-column.component';
import { BusinessPlanColumnComponent } from './business-plan-column/business-plan-column.component';
import { PageJumbotronComponent } from './page-jumbotron/page-jumbotron.component';

export const COMPONENTS = [
  PageJumbotronComponent,
  FreePlanColumnComponent,
  DeveloperPlanColumnComponent,
  BusinessPlanColumnComponent,
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
