import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  constructor(public activities:Router){}
  ngOnInt(){}
  getActivities(){
    this.activities.navigate(['activies'])
  }
}
