import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { PartyInfoComponent } from './party-info/party-info.component';
import { RsvpFormComponent } from './rsvp-form/rsvp-form.component';
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageCarouselComponent,
    PartyInfoComponent,
    RsvpFormComponent,
    ConfirmedComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
