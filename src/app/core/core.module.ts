import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import {AppBarComponent} from './app-bar/app-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, AboutComponent, NavFooterComponent, AppBarComponent]
})
export class CoreModule { }
