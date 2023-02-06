import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {
  constructor(private data:Router){}
  ngOnInit(){

  }
  getcontact(){
    this.data.navigate(['contact'])
  }

}
