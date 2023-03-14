import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { PartyInfoComponent } from './party-info/party-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageCarouselComponent,
    PartyInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
