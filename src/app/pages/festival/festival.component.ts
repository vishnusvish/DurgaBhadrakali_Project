import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.scss']
})
export class FestivalComponent {
  constructor(public about:Router){}

  ngOnInt(){

  }

  getAbout(){
    this.about.navigate(['about'])
  }

}