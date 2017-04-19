import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavFooterComponent, HomePageComponent]
})
export class CoreModule { }
