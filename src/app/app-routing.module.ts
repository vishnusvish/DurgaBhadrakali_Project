import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FestivalComponent } from './pages/festival/festival.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'menu', component:MenuComponent
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'gallery', component:GalleryComponent
  },
  {
    path:'contact', component:ContactComponent
  },
  {
    path:'activies', component:ActivitiesComponent
  },
  {
    path:'festival', component:FestivalComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
