import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PricingPageModule } from './pricing-page/pricing-page.module';
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { ResponsiveModule } from 'ng2-responsive';

// TODO: use env, to take keys out of projects
export const firebaseConfig = {
  apiKey: "AIzaSyA_9uYS1EviBA3-bJ_chRbp27wTDnV1rH0",
  authDomain: "showmetherepos-2e7e2.firebaseapp.com",
  databaseURL: "https://showmetherepos-2e7e2.firebaseio.com",
  projectId: "showmetherepos-2e7e2",
  storageBucket: "showmetherepos-2e7e2.appspot.com",
  messagingSenderId: "514045445611"
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ResponsiveModule,
    AngularFireModule.initializeApp(firebaseConfig),
    PricingPageModule,
    FormsModule,
    HttpModule,
    PagesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
