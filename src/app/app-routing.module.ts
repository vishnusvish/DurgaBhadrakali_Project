import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FestivalComponent } from './pages/festival/festival.component';
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
    path:'contact', component:ContactComponent
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
