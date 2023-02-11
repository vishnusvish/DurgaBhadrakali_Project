import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.scss']
})
export class FestivalComponent {
  constructor(public about:Router){}
<<<<<<< HEAD
=======

  ngOnInt(){

  }

  getAbout(){
    this.about.navigate(['about'])
  }
>>>>>>> a95d2ff53cf8766b60c709f5dd4d02b94b0cee33

  ngOnInt(){

  }

  getAbout(){
    this.about.navigate(['about'])
  }

}