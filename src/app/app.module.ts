import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { Section1Component } from './shared/section1/section1.component';
import { FestivalComponent } from './pages/festival/festival.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { SecondpageComponent } from './shared/secondpage/secondpage.component';
import { PongalaComponent } from './pages/pongala/pongala.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    Section1Component,
    FestivalComponent,
    ActivitiesComponent,
    GalleryComponent,
    SecondpageComponent,
    PongalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
